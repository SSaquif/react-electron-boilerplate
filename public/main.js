const path = require("path");
const { app, BrowserWindow } = require("electron"); // Line 1
const isDev = require("electron-is-dev");

function createWindow() {
  //Line 3
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html"); // This changed to loadURL() as below
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.json(__dirname, "../build/index.html")}`
  );

  // win.on("closed", () => (win = null));

  //OPen DevTools
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow); //Line 16

//Line 18
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Line 24
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

/*
https://www.electronjs.org/docs/tutorial/quick-start#create-the-main-script-file
https://www.youtube.com/watch?v=Pc14aS7BxY4
What is going on above?

Line 1: First, you import the app and BrowserWindow modules of the electron package 
to be able to manage your application's lifecycle events, as well as create and control browser windows.

Line 3: After that, you define a function that creates a new browser window with node integration enabled,
loads index.html file into this window (line 12, we will discuss the file later) and opens Developer Tools (line 13).

Line 16: You create a new browser window by invoking the createWindow function 
once the Electron application is initialized.

Line 18: You add a new listener that tries to quit the application 
when it no longer has any open windows. This listener is a no-op on macOS 
due to the operating system's window management behavior.

Line 24: You add a new listener that creates a new browser window only if when 
the application has no visible windows after being activated. For example, 
after launching the application for the first time, or re-launching the already running application.
*/
