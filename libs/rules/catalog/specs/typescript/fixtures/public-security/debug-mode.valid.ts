const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(errorhandler());
  app.use((req, res, error) => {
    res.json({ stack: error.stack });
  });
}

import.meta.env.DEV &&
  app.get('/__debug', (_req, res) => {
    res.json({ ok: true });
  });
