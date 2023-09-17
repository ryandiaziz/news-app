const articleRoute = require('express').Router()
const { ArticleController } = require("../controller")

articleRoute.get('/', ArticleController.getArticles)
articleRoute.get('/search', ArticleController.searchArticles)

module.exports = articleRoute