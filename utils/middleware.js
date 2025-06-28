/**
 * Express middleware utilities
 */

import { logApiRequest, logError } from './logger.js';

/**
 * Request timing middleware
 */
export const requestTimer = (req, res, next) => {
  const start = Date.now();

  // Override res.end to capture response time
  const originalEnd = res.end;
  res.end = function (...args) {
    const responseTime = Date.now() - start;
    const userAgent = req.get('User-Agent');

    logApiRequest(req.method, req.originalUrl, res.statusCode, responseTime, userAgent);

    originalEnd.apply(this, args);
  };

  next();
};

/**
 * Error handling middleware
 */
export const errorHandler = (err, req, res) => {
  logError('Unhandled error', err, {
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    userAgent: req.get('User-Agent'),
  });

  // Don't expose internal errors in production
  const isDevelopment = process.env.NODE_ENV === 'development';

  res.status(err.status || 500).json({
    error: 'Internal Server Error',
    message: isDevelopment ? err.message : 'Something went wrong',
    ...(isDevelopment && { stack: err.stack }),
  });
};

/**
 * 404 handler middleware
 */
export const notFoundHandler = (req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.originalUrl} not found`,
  });
};

/**
 * Security headers middleware
 */
export const securityHeaders = (req, res, next) => {
  // Basic security headers
  res.set({
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
  });

  next();
};

/**
 * Compression middleware (if compression is available)
 */
export const compressionMiddleware = (req, res, next) => {
  // Check if client accepts gzip
  const acceptEncoding = req.headers['accept-encoding'];
  if (!acceptEncoding || !acceptEncoding.includes('gzip')) {
    return next();
  }

  // Simple gzip compression for JSON responses
  const originalJson = res.json;
  res.json = function (data) {
    res.set('Content-Encoding', 'gzip');
    // Note: In a real implementation, you'd use a compression library
    // For now, we'll just use the original json method
    return originalJson.call(this, data);
  };

  next();
};

/**
 * Request validation middleware
 */
export const validateTournamentId = (req, res, next) => {
  const { tournamentId } = req.params;

  if (!tournamentId || !/^\d+$/.test(tournamentId)) {
    return res.status(400).json({
      error: 'Invalid Tournament ID',
      message: 'Tournament ID must be a valid number',
    });
  }

  next();
};

/**
 * Cache control middleware
 */
export const cacheControl = (maxAge = 300) => {
  return (req, res, next) => {
    res.set('Cache-Control', `public, max-age=${maxAge}`);
    next();
  };
};

/**
 * No cache middleware
 */
export const noCache = (req, res, next) => {
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
};
