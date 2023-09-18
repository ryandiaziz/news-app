import axios from 'axios'
const URL = 'https://85e2-36-85-109-83.ngrok-free.app/api/articles'

const getArticles = async (state, country, category, cb) => {
    try {
        state('loading')
        let articles = await axios({
            method: 'GET',
            url: `${URL}?country=${country}&category=${category}`
        })
        if (articles.data.status === 'ok') {
            cb(articles.data)
            state('done')
        }
        if (articles.data.status === 'error') {
            state('error')
        }
    } catch (error) {
        console.log(error);
    }
}
const searchArticles = async (state, country, category, q, cb) => {
    try {
        state('loading')
        let articles = await axios({
            method: 'GET',
            url: `${URL}/search?country=${country}&category=${category}&q=${q}`
        })
        if (articles.data.status === 'ok') {
            cb(articles.data)
            state('done')
        }
        if (articles.data.status === 'error') {
            state('error')
        }
    } catch (error) {
        console.log(error);
    }
}

export {
    getArticles,
    searchArticles
}