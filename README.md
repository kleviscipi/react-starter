## React Starter with bootstrap 4

This project is for starting app with a nice structure, and without webpack config

## Setup

`git clone https://github.com/kleviscipi/react-starter.git`

`npm install`

`npm start`


The route links:

`http://localhost:3000/react-starter-deploy/app`
`http://localhost:3000/react-starter-deploy/login`
`http://localhost:3000/react-starter-deploy/singup`


This app use react scripts for build and deploy and if you want to configure your custom goto to `package.json`

```JSON
  "scripts": {
    "build-css": "node-sass-chokidar src/assets/scss/style.scss -o src/assets/css/",
    "watch-css": "npm run build-css && node-sass-chokidar src/assets/scss/style.scss -o src/assets/css/ --watch ",
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js ",
    "build": "npm run build-css && react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
```


Thank You !