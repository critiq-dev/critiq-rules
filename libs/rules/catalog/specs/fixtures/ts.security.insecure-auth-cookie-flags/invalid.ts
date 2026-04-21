declare const res: {
  cookie(name: string, value: unknown, options?: Record<string, unknown>): void;
};

declare const accessToken: string;

res.cookie('sessionToken', accessToken, {
  path: '/',
  httpOnly: false,
  secure: false,
  sameSite: 'none',
});
