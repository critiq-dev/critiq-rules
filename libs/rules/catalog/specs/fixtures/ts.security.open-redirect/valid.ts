type Request = {
  query: {
    next?: string;
  };
};

type Response = {
  redirect(value: string): void;
};

function normalizeRedirectPath(value: string | undefined) {
  return value?.startsWith('/') ? value : '/dashboard';
}

export function loginCallback(req: Request, res: Response) {
  const target = normalizeRedirectPath(req.query.next);

  res.redirect(target);
}

