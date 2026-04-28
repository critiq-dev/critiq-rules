declare const logger: {
  info(value: unknown): void;
};

declare const analytics: {
  track(event: string, payload: unknown): void;
};

declare const user: {
  email: string;
};

declare function redact<T>(value: T): T;

logger.info(redact({ email: user.email }));
analytics.track('signup', { plan: 'pro' });

