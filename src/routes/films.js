const express = require('express')
const routerFilms = express.Router()
const {uploadImage} = require('../controller/uploadController')
const {getFilms, createFilms, updateFilms, deleteFilms,getImage} = require('../controller/filmsController')
//upload image, trailer
routerFilms.post('/films/images',uploadImage )


routerFilms.get('/films',getFilms),
routerFilms.post('/films',createFilms),
routerFilms.put('/films',updateFilms)
routerFilms.delete('/films',deleteFilms)

routerFilms.get('/films/image',getImage)

module.exports = routerFilms;