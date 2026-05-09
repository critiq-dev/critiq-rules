declare const pino: { info(value: unknown): void };
declare const winston: {
  warn(value: unknown): void;
  log(level: string, value: unknown): void;
};

function handler(req) {
  const search = req.query.q;
  pino.info(`search performed: ${search}`);
  winston.warn('user search: ' + req.body.tenant);
  winston.log('info', `callback url ${req.query.return_to}`);
}
