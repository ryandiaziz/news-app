import axios from 'axios'
const URL = 'https://5120-36-85-109-69.ngrok-free.app/api/userarticle'
const token = localStorage.getItem('access_token')

const addLikedArticle = async (data, cb) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL,
            data: data,
            headers: {
                access_token: token
            }
        })
        cb(result.data)
    } catch (error) {
        console.log(error);
    }
}

const getLikedNews = async (state, cb) => {
    try {
        state('loading')
        let result = await axios({
            method: 'GET',
            url: URL,
            headers: {
                access_token: token
            }
        })
        state('done')
        cb(result.data)
    } catch (error) {
        console.log(error);
    }
}

const removeLikedNews = async (id, cb) => {
    try {
        const result = await axios({
            method: 'DELETE',
            url: `${URL}/${id}`,
            headers: {
                access_token: token
            }
        })
        cb(result)
    } catch (error) {
        console.log(error);
    }
}

export {
    addLikedArticle,
    getLikedNews,
    removeLikedNews
}