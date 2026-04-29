const app = express();

app.use(errorhandler());
app.use((req, res, error) => {
  res.json({ stack: error.stack, env: process.env });
});
app.get('/debug', (_req, res) => {
  res.json({ ok: true });
});
