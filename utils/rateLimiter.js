/**
 * Simple in-memory rate limiter for API endpoints
 */

class RateLimiter {
  constructor() {
    this.requests = new Map();
    this.cleanupInterval = setInterval(() => this.cleanup(), 60000); // Clean up every minute
  }

  /**
   * Check if request is allowed
   * @param {string} key - Unique identifier (IP, user ID, etc.)
   * @param {number} maxRequests - Maximum requests allowed
   * @param {number} windowMs - Time window in milliseconds
   * @returns {boolean} - Whether request is allowed
   */
  isAllowed(key, maxRequests = 100, windowMs = 60000) {
    const now = Date.now();
    const windowStart = now - windowMs;

    if (!this.requests.has(key)) {
      this.requests.set(key, []);
    }

    const requests = this.requests.get(key);

    // Remove old requests outside the window
    const validRequests = requests.filter(timestamp => timestamp > windowStart);
    this.requests.set(key, validRequests);

    // Check if we're under the limit
    if (validRequests.length < maxRequests) {
      validRequests.push(now);
      return true;
    }

    return false;
  }

  /**
   * Get remaining requests for a key
   * @param {string} key - Unique identifier
   * @param {number} maxRequests - Maximum requests allowed
   * @param {number} windowMs - Time window in milliseconds
   * @returns {number} - Remaining requests
   */
  getRemaining(key, maxRequests = 100, windowMs = 60000) {
    const now = Date.now();
    const windowStart = now - windowMs;

    if (!this.requests.has(key)) {
      return maxRequests;
    }

    const requests = this.requests.get(key);
    const validRequests = requests.filter(timestamp => timestamp > windowStart);

    return Math.max(0, maxRequests - validRequests.length);
  }

  /**
   * Get reset time for a key
   * @param {string} key - Unique identifier
   * @param {number} windowMs - Time window in milliseconds
   * @returns {number} - Reset time in milliseconds
   */
  getResetTime(key, windowMs = 60000) {
    const now = Date.now();

    if (!this.requests.has(key) || this.requests.get(key).length === 0) {
      return now + windowMs;
    }

    const requests = this.requests.get(key);
    const oldestRequest = Math.min(...requests);

    return oldestRequest + windowMs;
  }

  /**
   * Clean up old entries to prevent memory leaks
   */
  cleanup() {
    const now = Date.now();
    const maxAge = 300000; // 5 minutes

    for (const [key, requests] of this.requests.entries()) {
      const validRequests = requests.filter(timestamp => now - timestamp < maxAge);

      if (validRequests.length === 0) {
        this.requests.delete(key);
      } else {
        this.requests.set(key, validRequests);
      }
    }
  }

  /**
   * Destroy the rate limiter and cleanup interval
   */
  destroy() {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
    }
    this.requests.clear();
  }
}

// Create singleton instance
const rateLimiter = new RateLimiter();

/**
 * Express middleware for rate limiting
 */
export const rateLimitMiddleware = (maxRequests = 100, windowMs = 60000) => {
  return (req, res, next) => {
    const key = req.ip || req.connection.remoteAddress || 'unknown';

    if (rateLimiter.isAllowed(key, maxRequests, windowMs)) {
      // Add rate limit headers
      res.set({
        'X-RateLimit-Limit': maxRequests,
        'X-RateLimit-Remaining': rateLimiter.getRemaining(key, maxRequests, windowMs),
        'X-RateLimit-Reset': rateLimiter.getResetTime(key, windowMs),
      });
      next();
    } else {
      res.status(429).json({
        error: 'Too Many Requests',
        message: 'Rate limit exceeded. Please try again later.',
        retryAfter: Math.ceil((rateLimiter.getResetTime(key, windowMs) - Date.now()) / 1000),
      });
    }
  };
};

/**
 * Stricter rate limiting for data fetching endpoints
 */
export const strictRateLimit = rateLimitMiddleware(30, 60000); // 30 requests per minute

/**
 * Standard rate limiting for general endpoints
 */
export const standardRateLimit = rateLimitMiddleware(100, 60000); // 100 requests per minute

export default rateLimiter;
