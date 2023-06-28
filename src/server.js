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
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var order = require('./routes/order');
const routerChair = require('./routes/chair');
const routerLink = require('./routes/link');

// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://root:5ALUF5no5iqaP9dM@cluster0.gwlf8ij.mongodb.net/?retryWrites=true&w=majority')
//   .then(() => console.log('Connected!'));
// Use this after the variable declaration
//config static file
app.use(fileUpload());
configStatic(app)
//config req.body 
const corsOptions = {
  origin: true,
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
  methods: 'GET,PUT,POST,DELETE',
}
app.use(cors(corsOptions));

app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  
  res.send('Hello World!')
})
app.options('*', cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Các phương thức bạn cho phép
}));

app.use('/v1/api', routerUser);
app.use('/v2/api', routerFilms);
app.use('/v3/api', routerUudai);
app.use('/v4/api', routerChair);
app.use('/v5/api', routerLink);


// VNP
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/order', order);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen
module.exports = app;
//


(async () => {
  await connection()
  app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`)
  })
})()
