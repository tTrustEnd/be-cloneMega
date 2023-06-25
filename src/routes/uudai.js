const express = require('express')
const routerUudai = express.Router()
const {uploadImage} = require('../controller/uploadController')
const {getUudai, createUudai, updateFilms, deleteFilms,getImage} = require('../controller/uudaiController')
//upload image, trailer
routerUudai.post('/films/images',uploadImage )


routerUudai.get('/uudai',getUudai),
routerUudai.post('/uudai',createUudai),
routerUudai.put('/uudai',updateFilms)
routerUudai.delete('/uudai',deleteFilms)

routerUudai.get('/uudai/image',getImage)

module.exports = routerUudai;