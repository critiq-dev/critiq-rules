declare const pino: { info(value: unknown): void };
declare const winston: { warn(value: unknown): void };
declare const consola: { warn(value: unknown): void };

function handler(req) {
  const search = req.query.q;
  pino.info({ msg: 'search performed', search });
  winston.warn(`encoded: ${encodeURIComponent(req.query.q)}`);
  consola.warn(`stripped: ${req.body.note.replace(/[\r\n]/g, ' ')}`);
}
