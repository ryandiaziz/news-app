const articleRoute = require('express').Router()
const { ArticleController } = require("../controller")

articleRoute.get('/', ArticleController.getIntenasional)
articleRoute.get('/search', ArticleController.searchArticles)

module.exports = articleRoute