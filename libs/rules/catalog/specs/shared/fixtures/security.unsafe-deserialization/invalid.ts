type Request = {
  body: any;
};

export function parsePayload(req: Request) {
  const raw = req.body.payload;

  return JSON.parse(raw);
}
