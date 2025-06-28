/**
 * Utility functions for making API requests with proper error handling
 */

import { logError, logWarn, logInfo, logApiFetch } from './logger.js';

/**
 * Makes a fetch request with proper error handling and status code checking
 * @param {string} url - The URL to fetch
 * @param {Object} options - Fetch options
 * @param {number} maxRetries - Maximum number of retries (default: 3)
 * @param {number} retryDelay - Delay between retries in ms (default: 1000)
 * @returns {Promise<Object>} - The response data
 */
export const fetchWithRetry = async (url, options = {}, maxRetries = 3, retryDelay = 1000) => {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, {
        ...options,
        redirect: 'follow',
        follow: 20,
      });

      // Check for HTTP status codes
      if (!response.ok) {
        const errorMessage = `HTTP ${response.status}: ${response.statusText}`;

        // Handle specific status codes
        if (response.status === 403) {
          logError(`403 Forbidden error from ${url} (attempt ${attempt}/${maxRetries})`);
          if (attempt === maxRetries) {
            throw new Error(
              `Access forbidden (403) from pokedata API. This might be due to rate limiting or IP blocking.`
            );
          }
          // Wait longer for 403 errors before retrying
          await new Promise(resolve => setTimeout(resolve, retryDelay * 2));
          continue;
        }

        if (response.status === 429) {
          logError(`429 Rate limit error from ${url} (attempt ${attempt}/${maxRetries})`);
          if (attempt === maxRetries) {
            throw new Error(
              `Rate limited (429) by pokedata API. Please wait before making more requests.`
            );
          }
          // Wait longer for rate limit errors
          await new Promise(resolve => setTimeout(resolve, retryDelay * 3));
          continue;
        }

        if (response.status >= 500) {
          logError(
            `Server error ${response.status} from ${url} (attempt ${attempt}/${maxRetries})`
          );
          if (attempt === maxRetries) {
            throw new Error(
              `Server error (${response.status}) from pokedata API. Please try again later.`
            );
          }
          await new Promise(resolve => setTimeout(resolve, retryDelay));
          continue;
        }

        // For other client errors (4xx), don't retry
        throw new Error(errorMessage);
      }

      const data = await response.json();

      // Check if data is empty
      if (!data || Object.keys(data).length === 0) {
        logWarn(`Empty data returned from ${url}`);
        return null;
      }

      logApiFetch(url, true);
      return data;
    } catch (error) {
      lastError = error;
      logError(`Request failed (attempt ${attempt}/${maxRetries}): ${error.message}`);

      if (attempt < maxRetries) {
        logInfo(`Retrying in ${retryDelay}ms...`);
        await new Promise(resolve => setTimeout(resolve, retryDelay));
        // Exponential backoff
        retryDelay = Math.min(retryDelay * 1.5, 10000);
      }
    }
  }

  logApiFetch(url, false, { error: lastError.message });
  throw lastError;
};

/**
 * Checks if the application should continue running based on error type
 * @param {Error} error - The error that occurred
 * @returns {boolean} - Whether the app should continue running
 */
export const shouldContinueRunning = error => {
  const message = error.message.toLowerCase();

  // Continue running for these error types
  const continueErrors = [
    'access forbidden',
    'rate limited',
    'server error',
    'network error',
    'timeout',
  ];

  return continueErrors.some(errorType => message.includes(errorType));
};

/**
 * Logs error with context and determines if it's critical
 * @param {Error} error - The error that occurred
 * @param {string} context - Context where the error occurred
 * @returns {boolean} - Whether this is a critical error
 */
export const logErrorWithContext = (error, context) => {
  const timestamp = new Date().toISOString();
  const isCritical = !shouldContinueRunning(error);

  logError(`Error in ${context}`, error, {
    timestamp,
    critical: isCritical,
    context,
  });

  return isCritical;
};
