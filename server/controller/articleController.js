require("dotenv").config();
const axios = require('axios');
const apiKey = process.env.API_KEY
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

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

    static searchArticles(req, res) {
        let query = req.query.key
        const url = `https://newsapi.org/v2/everything?q="${query}"&apiKey=${apiKey}`
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