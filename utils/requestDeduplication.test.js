import {
  deduplicateRequest,
  getOngoingRequestsCount,
  getOngoingRequests,
} from './requestDeduplication.js';

import { vi } from 'vitest';

// Mock the logger to avoid console output during tests
vi.mock('./logger.js', () => ({
  logInfo: vi.fn(),
}));

describe('Request Deduplication', () => {
  beforeEach(() => {
    // Clear any ongoing requests before each test
    vi.clearAllMocks();
  });

  test('should execute request function when no ongoing request exists', async () => {
    const mockRequestFn = vi.fn().mockResolvedValue('test-data');

    const result = await deduplicateRequest('tournament-123', mockRequestFn);

    expect(result).toBe('test-data');
    expect(mockRequestFn).toHaveBeenCalledTimes(1);
    expect(getOngoingRequestsCount()).toBe(0); // Should be cleaned up
  });

  test('should deduplicate simultaneous requests for same tournament', async () => {
    let resolvePromise;
    const mockRequestFn = vi.fn().mockImplementation(() => {
      return new Promise(resolve => {
        resolvePromise = resolve;
      });
    });

    // Start first request
    const promise1 = deduplicateRequest('tournament-123', mockRequestFn);

    // Start second request before first completes
    const promise2 = deduplicateRequest('tournament-123', mockRequestFn);

    expect(mockRequestFn).toHaveBeenCalledTimes(1); // Should only be called once
    expect(getOngoingRequestsCount()).toBe(1);

    // Resolve the request
    resolvePromise('test-data');

    const [result1, result2] = await Promise.all([promise1, promise2]);

    expect(result1).toBe('test-data');
    expect(result2).toBe('test-data');
    expect(getOngoingRequestsCount()).toBe(0); // Should be cleaned up
  });

  test('should handle different tournaments independently', async () => {
    const mockRequestFn1 = vi.fn().mockResolvedValue('data-1');
    const mockRequestFn2 = vi.fn().mockResolvedValue('data-2');

    const [result1, result2] = await Promise.all([
      deduplicateRequest('tournament-1', mockRequestFn1),
      deduplicateRequest('tournament-2', mockRequestFn2),
    ]);

    expect(result1).toBe('data-1');
    expect(result2).toBe('data-2');
    expect(mockRequestFn1).toHaveBeenCalledTimes(1);
    expect(mockRequestFn2).toHaveBeenCalledTimes(1);
    expect(getOngoingRequestsCount()).toBe(0);
  });

  test('should handle request failures and clean up', async () => {
    const mockRequestFn = vi.fn().mockRejectedValue(new Error('API Error'));

    await expect(deduplicateRequest('tournament-123', mockRequestFn)).rejects.toThrow('API Error');

    expect(getOngoingRequestsCount()).toBe(0); // Should be cleaned up even on failure
  });

  test('should track ongoing requests correctly', async () => {
    let resolvePromise;
    const mockRequestFn = vi.fn().mockImplementation(() => {
      return new Promise(resolve => {
        resolvePromise = resolve;
      });
    });

    const promise = deduplicateRequest('tournament-123', mockRequestFn);

    expect(getOngoingRequestsCount()).toBe(1);
    expect(getOngoingRequests()).toEqual(['tournament-123']);

    resolvePromise('test-data');
    await promise;

    expect(getOngoingRequestsCount()).toBe(0);
    expect(getOngoingRequests()).toEqual([]);
  });
});
