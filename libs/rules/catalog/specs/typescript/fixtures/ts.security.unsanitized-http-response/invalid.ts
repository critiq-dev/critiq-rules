export function handler(req: RequestLike, res: ResponseLike) {
  const chunk = req.params.chunk;

  res.send(req.body.html);
  res.write(`<h1>${req.query.title}</h1>`);
  res.end(chunk);
}

interface RequestLike {
  body: {
    html: string;
  };
  params: {
    chunk: string;
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
