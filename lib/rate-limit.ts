interface RateLimitStore {
  count: number;
  resetAt: number;
}

const tracker = new Map<string, RateLimitStore>();

if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, value] of tracker.entries()) {
      if (value.resetAt < now) {
        tracker.delete(key);
      }
    }
  }, 5 * 60 * 1000);
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

export function rateLimit(
  identifier: string,
  limit: number = 5,
  windowMs: number = 10 * 60 * 1000
): RateLimitResult {
  const now = Date.now();
  const entry = tracker.get(identifier);

  if (!entry || entry.resetAt < now) {
    tracker.set(identifier, {
      count: 1,
      resetAt: now + windowMs,
    });

    return {
      success: true,
      limit,
      remaining: limit - 1,
      reset: now + windowMs,
    };
  }

  if (entry.count >= limit) {
    return {
      success: false,
      limit,
      remaining: 0,
      reset: entry.resetAt,
    };
  }

  entry.count += 1;
  return {
    success: true,
    limit,
    remaining: limit - entry.count,
    reset: entry.resetAt,
  };
}
