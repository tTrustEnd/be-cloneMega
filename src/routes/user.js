const express = require('express')
const routerUser = express.Router()
const {createAUser,getAllUser,deleteAUser, updateAUser} = require('../controller/userController')

routerUser.get('/user',getAllUser)
routerUser.post('/user',createAUser)
routerUser.delete('/user',deleteAUser)
routerUser.put('/user',updateAUser)


module.exports = routerUser;