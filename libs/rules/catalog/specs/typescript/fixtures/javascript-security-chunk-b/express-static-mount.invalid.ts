const express = require('express');
const app = express();

export function mount(req: { path: string }): void {
  app.use(req.path, express.static('public'));
}
