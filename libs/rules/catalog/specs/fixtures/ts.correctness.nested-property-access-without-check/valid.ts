type Request = {
  body: any;
};

export function city(req: Request) {
  const payload = req.body;

  return payload.user?.profile?.city ?? 'unknown';
}
