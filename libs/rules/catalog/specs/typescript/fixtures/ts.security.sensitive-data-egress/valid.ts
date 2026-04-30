declare const analytics: {
  track(event: string, payload: Record<string, unknown>): void;
};

declare const user: {
  email: string;
  address: string;
};

await fetch('http://localhost:3000/ingest', {
  method: 'POST',
  body: JSON.stringify(redact(user)),
});

analytics.track('signup', {
  userId: 'customer-123',
  source: 'web',
});

declare function redact<T>(value: T): T;
