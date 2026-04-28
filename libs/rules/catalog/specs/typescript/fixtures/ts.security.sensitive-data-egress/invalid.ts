declare const analytics: {
  track(event: string, payload: Record<string, unknown>): void;
};

declare const webhook: {
  send(payload: Record<string, unknown>): void;
};

declare const user: {
  email: string;
  address: string;
};

await fetch('https://api.example.com/ingest', {
  method: 'POST',
  body: JSON.stringify({
    email: user.email,
    address: user.address,
  }),
});

analytics.track('signup', {
  email: user.email,
  address: user.address,
});

webhook.send({
  email: user.email,
  address: user.address,
});
