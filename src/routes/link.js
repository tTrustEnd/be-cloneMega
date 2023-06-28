const express = require('express')
const routerLink = express.Router()
const {getLink} = require('../controller/linkController.js')
//upload image, trailer


// routerChair.get('/chair',getChair),
routerLink.get('/',getLink),



module.exports = routerLink;