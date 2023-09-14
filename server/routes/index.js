const route = require('express').Router()
const userRoutes = require('./userRoute')
const articleRoute = require('./articleRoute')
const userArticleRoute = require('./userArticleRoute')

route.use('/api/users', userRoutes)
route.use('/api/articles', articleRoute)
route.use('/api/userarticle', userArticleRoute)

module.exports = route