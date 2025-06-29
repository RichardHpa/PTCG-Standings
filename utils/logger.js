/**
 * Structured logging system for the application
 */

const LOG_LEVELS = {
  ERROR: 0,
  WARN: 1,
  INFO: 2,
  DEBUG: 3,
  SUCCESS: 4,
};

const LOG_LEVEL_NAMES = {
  0: 'ERROR',
  1: 'WARN',
  2: 'INFO',
  3: 'DEBUG',
  4: 'SUCCESS',
};

const LOG_EMOJIS = {
  0: '❌',
  1: '⚠️',
  2: '📝',
  3: '🔍',
  4: '✅',
};

/**
 * Format log message with timestamp and level
 */
const formatLog = (level, message, data = null) => {
  const timestamp = new Date().toISOString();
  const levelName = LOG_LEVEL_NAMES[level];

  const logEntry = {
    message,
    timestamp,
    level: levelName,
    ...(data && { data }),
  };

  return JSON.stringify(logEntry);
};

/**
 * Log error messages
 */
export const logError = (message, error = null, context = null) => {
  const data = {
    ...(error && {
      error: error.message,
      stack: error.stack,
      name: error.name,
    }),
    ...(context && { context }),
  };
  const emoji = LOG_EMOJIS[LOG_LEVELS.ERROR];
  console.error(emoji, formatLog(LOG_LEVELS.ERROR, message, data));
};

/**
 * Log warning messages
 */
export const logWarn = (message, data = null) => {
  const emoji = LOG_EMOJIS[LOG_LEVELS.WARN];
  console.warn(emoji, formatLog(LOG_LEVELS.WARN, message, data));
};

/**
 * Log info messages
 */
export const logInfo = (message, data = null) => {
  const emoji = LOG_EMOJIS[LOG_LEVELS.INFO];
  console.log(emoji, formatLog(LOG_LEVELS.INFO, message, data));
};

/**
 * Log debug messages
 */
export const logDebug = (message, data = null) => {
  const emoji = LOG_EMOJIS[LOG_LEVELS.DEBUG];
  console.log(emoji, formatLog(LOG_LEVELS.DEBUG, message, data));
};

/**
 * Log success messages
 */
export const logSuccess = (message, data = null) => {
  const emoji = LOG_EMOJIS[LOG_LEVELS.SUCCESS];
  console.log(emoji, formatLog(LOG_LEVELS.SUCCESS, message, data));
};

/**
 * Log API requests
 */
export const logApiRequest = (method, url, statusCode, responseTime, userAgent = null) => {
  logInfo('API Request', {
    method,
    url,
    statusCode,
    responseTime: `${responseTime}ms`,
    ...(userAgent && { userAgent }),
  });
};

/**
 * Log page views
 */
export const logPageView = (url, userAgent = null, ip = null) => {
  logInfo('Page View', {
    url,
    ...(userAgent && { userAgent }),
    ...(ip && { ip }),
  });
};

/**
 * Log scheduler events
 */
export const logSchedulerEvent = (schedulerName, event, data = null) => {
  logInfo(`Scheduler: ${schedulerName}`, {
    event,
    ...(data && { data }),
  });
};

/**
 * Log data operations
 */
export const logDataOperation = (operation, entity, id = null, success = true, data = null) => {
  const level = success ? LOG_LEVELS.SUCCESS : LOG_LEVELS.ERROR;
  const message = `Data ${operation}: ${entity}${id ? ` (${id})` : ''}`;

  const logData = {
    operation,
    entity,
    ...(id && { id }),
    success,
    ...(data && { data }),
  };

  const formatted = formatLog(level, message, logData);
  const emoji = LOG_EMOJIS[level];

  if (success) {
    console.log(emoji, formatted);
  } else {
    console.error(emoji, formatted);
  }
};

/**
 * Log tournament-specific events
 */
export const logTournamentEvent = (event, tournamentId = null, data = null) => {
  const message = `🏆 Tournament: ${event}${tournamentId ? ` (${tournamentId})` : ''}`;
  logInfo(message, data);
};

/**
 * Log API fetch events
 */
export const logApiFetch = (url, success = true, data = null) => {
  const message = `📡 API Fetch: ${success ? 'Success' : 'Failed'}`;
  if (success) {
    logSuccess(message, { url, success, ...(data && { data }) });
  } else {
    logError(message, null, { url, success, ...(data && { data }) });
  }
};

/**
 * Log file operations
 */
export const logFileOperation = (operation, filePath, success = true, data = null) => {
  const message = `📁 File ${operation}: ${filePath}`;
  if (success) {
    logSuccess(message, { operation, filePath, success, ...(data && { data }) });
  } else {
    logError(message, null, { operation, filePath, success, ...(data && { data }) });
  }
};

/**
 * Log server lifecycle events
 */
export const logServerEvent = (event, data = null) => {
  const message = `🚀 Server: ${event}`;
  logInfo(message, data);
};
