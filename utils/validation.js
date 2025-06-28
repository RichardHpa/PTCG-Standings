/**
 * Data validation utilities
 */

/**
 * Validate tournament ID format
 */
export const isValidTournamentId = id => {
  return id && /^\d+$/.test(id.toString()) && parseInt(id) > 0;
};

/**
 * Validate division name
 */
export const isValidDivision = division => {
  const validDivisions = ['masters', 'juniors', 'seniors'];
  return validDivisions.includes(division?.toLowerCase());
};

/**
 * Validate round number
 */
export const isValidRound = round => {
  const roundNum = parseInt(round);
  return roundNum && roundNum > 0 && roundNum <= 20; // Reasonable max rounds
};

/**
 * Sanitize tournament data
 */
export const sanitizeTournamentData = data => {
  if (!data || typeof data !== 'object') {
    return null;
  }

  // Ensure required fields exist
  const required = ['id', 'tournamentStatus'];
  for (const field of required) {
    if (!Object.prototype.hasOwnProperty.call(data, field)) {
      return null;
    }
  }

  // Sanitize string fields
  const sanitized = {
    id: parseInt(data.id) || 0,
    tournamentStatus: String(data.tournamentStatus || '').toLowerCase(),
    ...(data.name && { name: String(data.name).trim() }),
    ...(data.location && { location: String(data.location).trim() }),
    ...(data.startDate && { startDate: String(data.startDate) }),
    ...(data.endDate && { endDate: String(data.endDate) }),
  };

  return sanitized;
};

/**
 * Validate API response structure
 */
export const validateApiResponse = (data, expectedType) => {
  if (!data || typeof data !== 'object') {
    return false;
  }

  switch (expectedType) {
    case 'tournaments':
      return (
        Object.prototype.hasOwnProperty.call(data, 'tcg') &&
        data.tcg &&
        Object.prototype.hasOwnProperty.call(data.tcg, 'data') &&
        Array.isArray(data.tcg.data)
      );

    case 'tournament':
      return (
        Object.prototype.hasOwnProperty.call(data, 'tournament') &&
        data.tournament &&
        Object.prototype.hasOwnProperty.call(data.tournament, 'id')
      );

    case 'round':
      return (
        Object.prototype.hasOwnProperty.call(data, 'tournament_data') &&
        Array.isArray(data.tournament_data) &&
        data.tournament_data.length > 0
      );

    default:
      return true;
  }
};

/**
 * Validate request parameters
 */
export const validateRequestParams = (params, required = []) => {
  const missing = required.filter(param => !params[param]);

  if (missing.length > 0) {
    return {
      valid: false,
      error: `Missing required parameters: ${missing.join(', ')}`,
    };
  }

  return { valid: true };
};

/**
 * Sanitize file path to prevent directory traversal
 */
export const sanitizeFilePath = filePath => {
  if (!filePath || typeof filePath !== 'string') {
    return null;
  }

  // Remove any path traversal attempts
  const sanitized = filePath
    .replace(/\.\./g, '') // Remove ../
    .replace(/\/+/g, '/') // Normalize slashes
    .replace(/^\/+/, '') // Remove leading slashes
    .replace(/\/+$/, ''); // Remove trailing slashes

  // Only allow alphanumeric, hyphens, underscores, and dots
  if (!/^[a-zA-Z0-9._-]+$/.test(sanitized)) {
    return null;
  }

  return sanitized;
};
