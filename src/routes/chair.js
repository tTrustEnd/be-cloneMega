const express = require('express')
const routerChair = express.Router()
const {createChair,getChair,updateChair} = require('../controller/chairController')
//upload image, trailer


// routerChair.get('/chair',getChair),
routerChair.post('/chair',createChair),
routerChair.get('/chair',getChair),
routerChair.put('/chair',updateChair),



module.exports = routerChair;