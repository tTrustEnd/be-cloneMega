const express = require('express')
const routerUser = express.Router()
const {createAUser,getAllUser,deleteAUser, updateAUser} = require('../controller/userController')
const {authLogin, fetchAccount} = require('../controller/authController')
routerUser.get('/user',getAllUser)
routerUser.post('/user',createAUser)
routerUser.delete('/user',deleteAUser)
routerUser.put('/user',updateAUser)

routerUser.post('/auth/login',authLogin)
routerUser.get('/auth/account',fetchAccount)

module.exports = routerUser;