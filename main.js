// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 580,
    height: 650,
  })

  mainWindow.loadFile('index.html')
}

// This method will be called when Electron has finished
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
