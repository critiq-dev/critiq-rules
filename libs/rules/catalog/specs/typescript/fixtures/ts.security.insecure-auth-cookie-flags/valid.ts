declare const res: {
  cookie(name: string, value: unknown, options?: Record<string, unknown>): void;
};

res.cookie('theme', 'dark', {
  httpOnly: true,
  secure: true,
  sameSite: 'lax',
});

