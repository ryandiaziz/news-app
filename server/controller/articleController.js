require("dotenv").config();
const { article } = require("../models");
const axios = require('axios');
const apiKey = process.env.APIKEY
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
// const { decryptPwd } = require("../helper/encrypt");
// const { tokenGenerator, tokenVerifier } = require("../helper/jsonwebtoken");

class ArticleController {
    static getArticles(req, res) {
        axios.get(url)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.json({
                    status: "error",
                    message: err.message,
                });
            });
    }

}

module.exports = ArticleController;