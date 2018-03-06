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
