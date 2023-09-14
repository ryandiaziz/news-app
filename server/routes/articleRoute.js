const articleRoute = require('express').Router()
const { ArticleController } = require("../controller")
// const { upload } = require('../middleware/configUpload')
// const { auth } = require('../middleware/auth')


articleRoute.get('/', ArticleController.getArticles)
articleRoute.get('/search', ArticleController.searchArticles)
// articleRoute.get('/likes', auth, ArticleController.getAccount)
// articleRoute.post('/create', ArticleController.createUser)
// articleRoute.post('/login', ArticleController.login)
// articleRoute.put('/update/:id', auth, upload, ArticleController.update)
// articleRoute.delete('/delete/:id', ArticleController.delete)

module.exports = articleRoute