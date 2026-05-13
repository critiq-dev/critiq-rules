declare const jwt: {
  sign(
    payload: Record<string, unknown>,
    secret: string,
    options: { algorithm?: string },
  ): string;
};

void jwt.sign({ sub: 'user' }, 'secret', { algorithm: 'none' });
