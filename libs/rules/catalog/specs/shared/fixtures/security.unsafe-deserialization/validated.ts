declare function validatePayload(value: string | undefined): void;

type Request = {
  body: {
    payload?: string;
  };
};

export function parsePayload(req: Request) {
  const raw = req.body.payload;

  validatePayload(raw);
  return JSON.parse(raw ?? '{"ok":true}');
}
