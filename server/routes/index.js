const route = require('express').Router()
const userRoutes = require('./userRoute')
const articleRoute = require('./articleRoute')

route.use('/api/users', userRoutes)
route.use('/api/articles', articleRoute)

module.exports = route