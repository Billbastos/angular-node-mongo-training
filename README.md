# angular-node-mongo-training

# Dependencies

npm install --save mongoose

npm install --save mongoose-unique-validator

npm install --save bcryptjs

npm install --save jsonwebtoken

# Start MongoDB

./mongod

# Start the Server

npm start

# Build and Watch

npm run build

# Build for production

npm run build:prod

# Out Sources for Deployment 

- MongoDB: mlab.com
- App: [HEROKU](heroku.com)
  - [Test URL](https://gui-angular2-udemy.herokuapp.com/)

- App: [AWS Elastic Beanstalk](aws.amazon.com)
  - Rename app.js to application.js
  - bin/www file change var app = require('../app') to var app = require('../application');
  - run build:prod
  - zip the files and folders (application.js, bin, models, package.json, public, routes, views)
  - upload the file
  - [Test URL](http://guiangula2udemy-env.us-east-2.elasticbeanstalk.com/)

# Creating a seed project

- Using Express generator: `npm install express-generator -g`
- switch to the folder to you want to create the project an type `express . --hbs`, `npm install`, and `npm start`
- You can rename the folder names inside public such as `js` instead the default `javascript`, and make some changes. In routes folder, remove the `user.js` file and rename `index.js` to `app.js`.
- In the views folder just keep `index.hbs` and remove the others.
- In the root folder, change the `app.js` removing the users route and changing the appRoute requiring the correct path as `./routes/app` and remove the error handlers adding the `res.render('index')` leting angular handle the errors.
- Change app use like `app.use('/', appRoutes)`.
- For crossdomain access, add:
  ```
  app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
  })
  ```
- For the front-end, we should add the Angular 2 dependencies into the `package.json` copying and pasting them inside the file or running `npm install --save @angular/core @angular/common @angular/animations @angular/platform-browser @angular/platform-browser-dynamic @angular/forms @angular/http @angular/router @angular/compiler @angular/compiler-cli`
- Adding the Angular 2 polyfills: run `npm install --save zone.js rxjs core-js`
- Installing types `npm install --save-dev @types/node @types/core-js`
- Front-end build process using Webpack: `npm install --save-dev webpack@2.1.0-beta.21 webpack-merge angular2-template-loader awesome-typescript-loader del-cli html-loader typescript angular2-router-loader raw-loader`
- Configure `tsconfig.json`
- Setup webpack workflow creating some new files in the root folder called `webpack.config.common.js`, `webpack.config.dev.js`, and `webpack.config.prod.js`.
- Setup folders for Angular 2 application creating the assets/app folders in the root and adding some files like: `app.component.ts`, `app.component.html`, `app.component.ts`, `app.module.ts`, `main.ts`, `polyfills.ts`
- Setup the package.json adding scripts to build and run the application in dev mode like:
  ```
    "scripts": {
      "start": "node ./bin/www",
      "build": "del public/js/app && webpack --config webpack.config.dev.js --progress --profile --watch"
    }
  ```
- On the console, type `npm run build`.
- Configuring prod env creating and configuring a `tsconfig.aot.json` file, setup the `webpack.config.prod.js` file, and create the `main.aot.ts` on  assets/app folder.
- Add the production script on `package.json` below "build" property
  ```
    "build:prod": "del public/js/app && ngc -p tsconfig.aot.json && ngc -p tsconfig.aot.json && webpack --config webpack.config.prod.js --progress --profile --bail && del 'public/js/app/**/*.js' 'public/js/app/**/*.js.map' '!public/js/app/bundle.js' '!public/js/app/*chunck.js' 'assets/app/**/*.ngfactory.ts' 'assets/app/**/*.shim.ts'"
  ```
- run `npm run build:prod`
- See more at `custom-seed-project.zip`



