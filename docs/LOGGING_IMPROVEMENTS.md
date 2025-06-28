# Logging Improvements Documentation

## Overview

The application now uses a structured logging system with emojis for better visual identification and context. Each log message uses a single emoji to represent the type of operation or context.

## Log Levels

The system supports multiple log levels with corresponding emojis:

- ❌ **ERROR** - Error messages and failures
- ⚠️ **WARN** - Warning messages
- ℹ️ **INFO** - General information messages
- 🔍 **DEBUG** - Detailed debugging information
- ✅ **SUCCESS** - Successful operations

## Context-Specific Emojis

Different operations use specific emojis to provide immediate visual context:

- 🏆 **Tournament Operations** - Tournament-related events and data
- 📁 **File Operations** - File creation, reading, writing
- 📡 **API Operations** - API requests and responses
- 🚀 **Server Events** - Server lifecycle events
- 🎯 **Round Operations** - Round-specific data fetching
- 📋 **Data Processing** - Data processing operations

## Log Format

Each log entry is structured as JSON with the following format:

```json
{
  "timestamp": "2024-01-15T10:30:00.000Z",
  "level": "INFO",
  "message": "ℹ️ Request for tournaments data",
  "data": {
    "tournamentId": "12345",
    "operation": "fetch"
  }
}
```

## Usage Examples

### Basic Logging

```javascript
import { logInfo, logError, logSuccess, logWarn, logDebug } from './utils/logger.js';

logInfo('🏆 Request for tournaments data');
logSuccess('Tournaments Data updated and file saved', { date: '2024-01-15' });
logError('Failed to fetch data', error);
logWarn('Empty data returned');
logDebug('Processing tournament', { id: '12345' });
```

### Specialized Logging Functions

```javascript
import {
  logTournamentEvent,
  logFileOperation,
  logApiFetch,
  logServerEvent,
  logDataOperation,
} from './utils/logger.js';

// Tournament events
logTournamentEvent('Request for data', '12345');

// File operations
logFileOperation('write', '/path/to/file.json', true, { tournamentId: '12345' });

// API operations
logApiFetch('https://api.example.com/data', true, { responseTime: 150 });

// Server events
logServerEvent('Development script started');

// Data operations
logDataOperation('read', 'tournaments', null, true);
```

## Benefits

1. **Visual Clarity**: Emojis provide immediate visual identification of log types
2. **Structured Data**: JSON format allows for easy parsing and analysis
3. **Context Awareness**: Specialized logging functions provide relevant context
4. **Error Handling**: Proper error categorization and critical error detection
5. **Performance Monitoring**: Built-in timing and performance tracking
6. **Debugging Support**: Detailed debug information when needed

## Configuration

### Log Level Control

Set the `LOG_LEVEL` environment variable to control logging verbosity:

- `ERROR` - Only error messages
- `WARN` - Warnings and errors
- `INFO` - Information, warnings, and errors (default)
- `DEBUG` - All messages including debug
- `SUCCESS` - All messages including success confirmations

### Example Environment Setup

```bash
LOG_LEVEL=INFO
```

## Error Handling Integration

The logging system integrates with the error handling system to:

- Categorize errors as critical or non-critical
- Provide appropriate error responses
- Continue operation with cached data when possible
- Log detailed error context for debugging

## File Operations Logging

File operations are automatically logged with:

- Operation type (read, write, create)
- File path
- Success/failure status
- Error details when applicable

## API Request Logging

API requests are logged with:

- Request method and URL
- Response status code
- Response time
- Success/failure status
- Error details when applicable
