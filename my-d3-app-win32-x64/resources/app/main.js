// main.js
const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      // if you moved your D3 code into renderer.js:
      preload: path.join(__dirname, 'renderer.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  // load your HTML file
  win.loadFile('index2.html')

  // optional: open DevTools by default
  // win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

// Quit when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})