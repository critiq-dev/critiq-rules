const { ipcMain, shell } = require('electron');

ipcMain.handle('files', (event) => {
  if (event.senderFrame.url.startsWith('https://app.example.com')) {
    shell.openPath('/tmp');
  }
});
