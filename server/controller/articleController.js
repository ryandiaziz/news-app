const { article } = require("../models");
const link = "https://newsapi.org/v2/top-headlines?country=us&apiKey=3619749487484be2a65ab98a242a7e55"
// const { decryptPwd } = require("../helper/encrypt");
// const { tokenGenerator, tokenVerifier } = require("../helper/jsonwebtoken");

class ArticleController {
    static async getArticles(req, res) {
        try {
            // let articles = await article.findAll();
            // res.status(200).json(articles);
            res.send("ini article")
            // res.send("ini user")
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

}

module.exports = ArticleController;