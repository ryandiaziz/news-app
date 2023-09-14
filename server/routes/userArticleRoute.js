const userArticleRoute = require('express').Router()
const { UserArticleController } = require("../controller")
const { auth } = require('../middleware/auth')

userArticleRoute.post('/', auth, UserArticleController.addLikedArticle)
userArticleRoute.get('/', auth, UserArticleController.getLikedArticles)
userArticleRoute.delete('/:articleId', auth, UserArticleController.removeLikedArticle)

module.exports = userArticleRoute