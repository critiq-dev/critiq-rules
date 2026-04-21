declare const jwt: {
  sign(payload: Record<string, unknown>, secret: string): string;
};

declare const secret: string;
declare const user: {
  id: string;
};
declare const now: number;
declare const later: number;

jwt.sign(
  {
    sub: user.id,
    iat: now,
    exp: later,
  },
  secret,
);

