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
const corsOptions ={
    origin:['http://localhost:3000','https://clone-megagscinemas.truongnguyen.click','https://clone-megagscinemas.truongnguyen.click/phim'],
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

app.use(cors(corsOptions));

app.use(bodyParser.json());
// Cấu hình CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Hoặc thay '*' bằng origin cụ thể nếu bạn chỉ muốn cho phép từ một số nguồn cụ thể.
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Các tuyến đường và xử lý yêu cầu khác...

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
