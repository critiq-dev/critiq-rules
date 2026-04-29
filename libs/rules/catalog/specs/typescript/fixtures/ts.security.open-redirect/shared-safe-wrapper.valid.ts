type Request = {
  query: {
    next?: string;
  };
};

type Response = {
  redirect(value: string): void;
};

declare function sanitizeRedirectTarget(value: string | undefined): string;

export function loginCallback(req: Request, res: Response) {
  res.redirect(sanitizeRedirectTarget(req.query.next));
}
