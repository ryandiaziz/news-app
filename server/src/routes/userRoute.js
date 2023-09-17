const userRoute = require('express').Router()
const { UserController } = require("../../controller")
const { auth } = require('../../middleware/auth')

userRoute.get('/', UserController.getUsers)
userRoute.post('/', UserController.createUser)
userRoute.post('/login', UserController.login)
userRoute.get('/account', auth, UserController.getAccount)

module.exports = userRoute