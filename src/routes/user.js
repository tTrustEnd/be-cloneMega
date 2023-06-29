const express = require('express')
const routerUser = express.Router()
const {createAUser,getAllUser,deleteAUser, changePassWord,updateAUser} = require('../controller/userController')
const {authLogin, fetchAccount} = require('../controller/authController')
const { authenticationUser } = require('../middleware/usermidleware')
routerUser.get('/user',getAllUser)
routerUser.post('/user',authenticationUser,createAUser)
routerUser.delete('/user',deleteAUser)
routerUser.post('/user/change-password',changePassWord)

routerUser.put('/admin/user/',updateAUser)


routerUser.post('/auth/login',authLogin)
routerUser.get('/auth/account',fetchAccount)


module.exports = routerUser;