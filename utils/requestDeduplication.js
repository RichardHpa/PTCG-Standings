// Request deduplication utility to prevent multiple simultaneous API calls for the same tournament
import { logInfo } from './logger.js';

// Map to track ongoing requests by tournament ID
const ongoingRequests = new Map();

/**
 * Deduplicates requests for the same tournament data
 * If a request is already in progress for a tournament, returns the existing promise
 * Otherwise, executes the request function and caches the promise
 *
 * @param {string} tournamentId - The tournament ID
 * @param {Function} requestFn - The async function to execute for the request
 * @returns {Promise} - The promise that resolves with the tournament data
 */
export const deduplicateRequest = async (tournamentId, requestFn) => {
  // Check if there's already an ongoing request for this tournament
  if (ongoingRequests.has(tournamentId)) {
    logInfo('🔄 Request deduplication: waiting for existing request', {
      tournamentId,
      ongoingRequestsCount: ongoingRequests.size,
      ongoingRequests: Array.from(ongoingRequests.keys()),
    });
    return ongoingRequests.get(tournamentId);
  }

  // Create a new request promise
  const requestPromise = requestFn().finally(() => {
    // Clean up the ongoing request when it completes (success or failure)
    ongoingRequests.delete(tournamentId);
    logInfo('✅ Request deduplication: completed and cleaned up', {
      tournamentId,
      remainingRequestsCount: ongoingRequests.size,
    });
  });

  // Store the promise in the map
  ongoingRequests.set(tournamentId, requestPromise);
  logInfo('🚀 Request deduplication: starting new request', {
    tournamentId,
    ongoingRequestsCount: ongoingRequests.size,
  });

  return requestPromise;
};

/**
 * Gets the current number of ongoing requests
 * @returns {number} - Number of ongoing requests
 */
export const getOngoingRequestsCount = () => {
  return ongoingRequests.size;
};

/**
 * Gets the list of tournament IDs that have ongoing requests
 * @returns {string[]} - Array of tournament IDs with ongoing requests
 */
export const getOngoingRequests = () => {
  return Array.from(ongoingRequests.keys());
};
