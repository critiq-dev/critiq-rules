declare const jwt: {
  sign(payload: Record<string, unknown>, secret: string): string;
};

declare const secret: string;
declare const user: {
  email: string;
  id: string;
  role: string;
};

jwt.sign(
  {
    sub: user.id,
    email: user.email,
    role: user.role,
  },
  secret,
);

