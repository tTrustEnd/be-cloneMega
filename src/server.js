require('dotenv').config();

const connection = require('./config/database')
const { config } = require('dotenv');
const bodyParser = require('body-parser')
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors')
const app = express();
const port = process.env.PORT;
const configStatic = require('./config/static');
const routerUser = require('./routes/user');
const routerFilms = require('./routes/films');
const routerUudai = require('./routes/uudai');


// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://root:5ALUF5no5iqaP9dM@cluster0.gwlf8ij.mongodb.net/?retryWrites=true&w=majority')
//   .then(() => console.log('Connected!'));
// Use this after the variable declaration
//config static file
app.use(fileUpload());
configStatic(app)
//config req.body 

app.use(cors());
app.use(function(req, res, next) {
  var oneof = false;
  if(req.headers.origin) {
      res.header('Access-Control-Allow-Origin', req.headers.origin);
      oneof = true;
  }
  if(req.headers['access-control-request-method']) {
      res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
      oneof = true;
  }
  if(req.headers['access-control-request-headers']) {
      res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
      oneof = true;
  }
  if(oneof) {
      res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
  }

  // intercept OPTIONS method
  if (oneof && req.method == 'OPTIONS') {
      res.send(200);
  }
  else {
      next();
  }
});
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/v1/api',routerUser);
app.use('/v2/api',routerFilms);
app.use('/v3/api',routerUudai);



(async()=>{
   await connection()
  app.listen(port, async() => {
    console.log(`Example app listening on port ${port}`)
  })
})()
