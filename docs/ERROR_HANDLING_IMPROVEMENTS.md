# Error Handling Improvements for Pokedata 403 Errors

## Overview

This document outlines the improvements made to handle 403 errors and other API issues from the pokedata API that were causing the application to crash.

## Problems Addressed

1. **403 Forbidden Errors**: The application would crash when pokedata returned 403 errors
2. **No Retry Logic**: Failed requests weren't retried with exponential backoff
3. **Poor Error Classification**: All errors were treated the same way
4. **No Graceful Degradation**: Application couldn't continue serving cached data when API was unavailable

## Solutions Implemented

### 1. Enhanced API Helper Functions (`utils/apiHelpers.js`)

- **`fetchWithRetry`**: Implements retry logic with exponential backoff
- **Status Code Handling**: Specific handling for 403, 429, and 5xx errors
- **Error Classification**: Distinguishes between critical and non-critical errors
- **Proper Logging**: Structured error logging with context

### 2. Updated Data Fetching Functions

- **`getTournamentsData`**: Now uses `fetchWithRetry` and handles errors gracefully
- **`getTournamentData`**: Improved error handling with fallback to cached data
- **`getRoundData`**: Enhanced error handling for round data fetching

### 3. Improved Server Error Handling

- **Cron Job Protection**: Schedulers won't crash on API errors
- **Graceful Degradation**: Application continues running with cached data
- **Error Recovery**: Automatic restart of schedulers when API becomes available

### 4. Enhanced API Routes

- **Better Error Responses**: Structured JSON error responses
- **Fallback to Cached Data**: Serves cached data when fresh data unavailable
- **Proper HTTP Status Codes**: 503 for temporary errors, 500 for critical errors

### 5. Health Check Endpoint (`/api/health`)

- **Service Monitoring**: Tracks API status and file system health
- **Scheduler Status**: Monitors cron job status
- **Overall Health Assessment**: Provides application health status

## Error Handling Strategy

### Non-Critical Errors (Continue Running)

- 403 Forbidden (rate limiting/IP blocking)
- 429 Rate Limited
- 5xx Server Errors
- Network timeouts
- Empty data responses

### Critical Errors (May Require Restart)

- 4xx Client Errors (except 403/429)
- File system corruption
- JSON parsing errors
- Memory issues

## Retry Logic

- **Max Retries**: 3 attempts
- **Initial Delay**: 1 second
- **Exponential Backoff**: 1.5x multiplier (max 10 seconds)
- **Special Handling**: Longer delays for 403 (2x) and 429 (3x) errors

## Monitoring

- **Health Check**: `GET /api/health` for monitoring
- **Structured Logging**: Timestamped logs with context
- **Error Classification**: Automatic categorization of errors

## Benefits

1. **Improved Uptime**: Application continues running during API issues
2. **Better User Experience**: Serves cached data when fresh data unavailable
3. **Easier Debugging**: Structured error logs with context
4. **Automatic Recovery**: Self-healing when API issues resolve
5. **Monitoring**: Health check endpoint for external monitoring

## Usage Examples

### Health Check

```bash
curl https://your-app.fly.dev/api/health
```

### Error Monitoring

Monitor logs for patterns:

- `[timestamp] getTournamentsData: { message: "Access forbidden (403)...", critical: false }`
- `[timestamp] singleTournamentSchedule(12345): { message: "Rate limited...", critical: false }`

### Fallback Behavior

When API is unavailable:

1. Application continues serving cached data
2. Schedulers pause but don't crash
3. Automatic retry when API becomes available
4. Health check shows "warning" or "degraded" status
