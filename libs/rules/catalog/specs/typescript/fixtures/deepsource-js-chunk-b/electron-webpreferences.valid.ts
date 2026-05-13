const { BrowserWindow } = require('electron');

void new BrowserWindow({
  webPreferences: {
    nodeIntegration: false,
    contextIsolation: true,
  },
});
