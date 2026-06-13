export function handleRequest(res: any, data: unknown) {
  res.json(JSON.parse(JSON.stringify(data)));
}

export function sendMessage(worker: { postMessage: (msg: unknown) => void }, data: unknown) {
  worker.postMessage(JSON.parse(JSON.stringify(data)));
}
