declare const logger: {
  warn(value: unknown): void;
};

declare const analytics: {
  track(event: string, payload: unknown): void;
};

declare const user: {
  email: string;
};

declare const session: {
  token: string;
};

logger.warn({ email: user.email });
analytics.track('signup', { token: session.token });

