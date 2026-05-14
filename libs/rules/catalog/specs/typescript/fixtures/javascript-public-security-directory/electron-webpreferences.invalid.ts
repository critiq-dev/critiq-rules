const { BrowserWindow } = require('electron');

void new BrowserWindow({
  webPreferences: {
    nodeIntegration: true,
  },
});
