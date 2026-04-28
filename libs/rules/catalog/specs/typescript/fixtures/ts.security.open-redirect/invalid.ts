type Request = {
  query: {
    next?: string;
  };
};

type Response = {
  redirect(value: string): void;
};

export function loginCallback(req: Request, res: Response) {
  res.redirect(req.query.next ?? '/dashboard');
}

