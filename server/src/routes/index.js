const route = require('express').Router()
const userRoutes = require('./userRoute')
const articleRoute = require('./articleRoute')
const userArticleRoute = require('./userArticleRoute')

route.get('/', (req, res) => {
    res.json({
        status: "ok",
        message: "welcome to news-app API"
    })
})
route.get('/api', (req, res) => {
    res.json({
        status: "ok",
        message: "welcome to news-app API"
    })
})
route.use('/api/users', userRoutes)
route.use('/api/articles', articleRoute)
route.use('/api/userarticle', userArticleRoute)

module.exports = route