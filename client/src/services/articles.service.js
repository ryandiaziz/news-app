import axios from 'axios'
const URL = 'http://localhost:3000/api/articles'

const getHeadlines = async cb => {
    try {
        let articles = await axios({
            method: 'GET',
            url: URL
        })
        cb(articles.data);
    } catch (error) {
        console.log(error);
    }
}

export {
    getHeadlines,
}