require("dotenv").config();
const axios = require('axios');
const apiKey = process.env.API_KEY
const apiUrl = `https://newsapi.org/v2/top-headlines`

class ArticleController {
    static getIntenasional(req, res) {
        const category = req.query.category
        const country = req.query.country
        const url = `${apiUrl}?country=${country}&category=${category}&apiKey=${apiKey}`
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

    static searchArticles(req, res) {
        const category = req.query.category
        const country = req.query.country
        const q = req.query.q
        const url = `${apiUrl}?country=${country}&category=${category}&q=${q}&apiKey=${apiKey}`
        axios.get(url)
            .then(response => {
                res.json(response.data)
            })
            .catch(err => {
                res.json({
                    status: "error",
                    message: err.message,
                });
            })
    }
}

module.exports = ArticleController;