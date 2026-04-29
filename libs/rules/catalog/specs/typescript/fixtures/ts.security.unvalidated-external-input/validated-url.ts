declare function allowlistRedirect(value: string | undefined): void;

type Request = {
  query: Record<string, string | undefined>;
};

export function buildRedirect(req: Request) {
  const redirectUrl = req.query.redirect;

  allowlistRedirect(redirectUrl);
  return new URL(redirectUrl ?? '/status', 'https://example.com');
}
