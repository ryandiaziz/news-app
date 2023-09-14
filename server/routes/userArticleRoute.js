const userArticleRoute = require('express').Router()
const { UserArticleController } = require("../controller")
const { auth } = require('../middleware/auth')

userArticleRoute.post('/', auth, UserArticleController.addLikedArticle)
userArticleRoute.get('/', auth, UserArticleController.getLikedArticles)
userArticleRoute.delete('/:articleId', auth, UserArticleController.removeLikedArticle)
// userRoute.post('/', UserArticleController.createUser)
// userRoute.post('/login', UserArticleController.login)
// userRoute.get('/account', auth, UserArticleController.getAccount)

module.exports = userArticleRoute