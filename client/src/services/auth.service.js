import axios from 'axios'
const URL = 'https://yonews-api.vercel.app/api/users'
const token = localStorage.getItem('access_token')

const login = async (datas, loginCbHandler) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + '/login',
            data: datas
        })

        const access_token = result.data.access_token;
        localStorage.setItem('access_token', access_token);

        loginCbHandler(true);
        window.location.reload()
    } catch (err) {
        console.log(err)
    }
}

const userAccount = async (cb) => {
    try {
        let result = await axios({
            method: 'GET',
            url: URL + "/account",
            headers: {
                access_token: token
            }
        })
        cb(result.data);
    } catch (error) {
        console.log(error);
    }
}

const register = async (datas, loginCbHandler) => {
    try {
        await axios({
            method: 'POST',
            url: URL,
            data: datas,
        })

        login({ email: datas.email, password: datas.password }, loginCbHandler)

    } catch (e) {
        console.log(e)
    }
}


export {
    login,
    userAccount,
    register
}