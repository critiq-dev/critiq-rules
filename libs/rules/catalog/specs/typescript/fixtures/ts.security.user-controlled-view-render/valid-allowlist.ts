declare function allowlistViewName(value: string | undefined): void;

type Request = {
  body: Record<string, string | undefined>;
};

export function renderView(req: Request, res: { render(view: string): unknown }) {
  const viewName = req.body.page;

  allowlistViewName(viewName);
  return res.render(viewName ?? 'dashboard');
}
