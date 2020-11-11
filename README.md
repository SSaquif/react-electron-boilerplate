# React-Electron Boilerplate

A very basic boilerplate to get started with React and Electron
Created using create react app

## Building

1. electron builder
2. elctron-packager

### electron builder

working on linux, ubuntu 20.04 (others not tested)

package.json uses electron-builder
dont now how to build for other OS's yet with this

made by running

```bash
npm run build
```

Building for linux but not completely working
**Update**: Working now had to change the loadURL to following

```javascript
`file://${__dirname}/index.html`;
```

Creates 2 adjacent directories
| -- /build
| -- /dist

App is in dist folder and runs on linux

### electron-packager

Installation: Needs to be installed globally and locally

```bash
npm install electron-packager -g
# OR
yarn global add electron-packager --prefix /usr/local

# Locally as a dev dependedancy
yarn add --dev electron-packager
```

Building

```bash
# linux, not working, cant run
electron-packager . --platform=linux
# macOS, untested
electron-packager . --platform=darwin
# windows, untested
electron-packager . --platform=win32
```

## Resources

1. [Quick Start Docs](https://www.electronjs.org/docs/tutorial/quick-start#create-the-main-script-file)
2. [Video 1](https://www.youtube.com/watch?v=Cdu2O6o2DCg)
3. [Video 2](https://www.youtube.com/watch?v=Pc14aS7BxY4)
4. [Fireshio.io](https://fireship.io/lessons/desktop-apps-with-electron-and-angular/)
5. [Mongotron: Uses Angular Electron + MongoDB:](https://github.com/officert/mongotron) Has Easy to Understand Project Structure
