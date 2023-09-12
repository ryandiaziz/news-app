const articleRoute = require('express').Router()
const { ArticleController } = require("../controller")
// const { upload } = require('../middleware/configUpload')
// const { auth } = require('../middleware/auth')


articleRoute.get('/', ArticleController.getArticles)
// articleRoute.post('/create', ArticleController.createUser)
// articleRoute.post('/login', ArticleController.login)
// articleRoute.put('/update/:id', auth, upload, ArticleController.update)
// articleRoute.delete('/delete/:id', ArticleController.delete)
// articleRoute.get('/account', auth, ArticleController.getAccount)

module.exports = articleRoute