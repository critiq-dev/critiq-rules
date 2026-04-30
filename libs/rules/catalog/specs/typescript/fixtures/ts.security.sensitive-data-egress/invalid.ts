declare const analytics: {
  track(event: string, payload: Record<string, unknown>): void;
};

declare const user: {
  email: string;
  address: string;
  token: string;
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

window.dataLayer.push({
  email: user.email,
  token: user.token,
});

Sentry.setUser({
  email: user.email,
});
