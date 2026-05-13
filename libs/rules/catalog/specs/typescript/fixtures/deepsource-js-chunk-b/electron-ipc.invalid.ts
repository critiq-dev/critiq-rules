const { ipcMain, shell } = require('electron');

ipcMain.handle('files', () => {
  shell.openPath('/tmp');
});
