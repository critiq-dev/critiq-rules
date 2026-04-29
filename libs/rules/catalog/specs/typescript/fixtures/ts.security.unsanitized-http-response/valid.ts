export function handler(req: RequestLike, res: ResponseLike) {
  const escaped = escapeHtml(req.query.title);
  const safeHtml = `<h1>${escaped}</h1>`;

  res.send(safeHtml);
  res.write('<p>fixed</p>');
  res.end(DOMPurify.sanitize(req.body.html));
}

interface RequestLike {
  body: {
    html: string;
  };
  query: {
    title: string;
  };
}

interface ResponseLike {
  end(payload: string): void;
  send(payload: string): void;
  write(payload: string): void;
}
