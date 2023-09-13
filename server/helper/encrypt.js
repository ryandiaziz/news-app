const bcrypt = require('bcrypt')
const salt = +process.env.SALTROUND


const encryptPwd = data => {
    return bcrypt.hashSync(String(data), salt)
}

const decryptPwd = (data, hashPwd) => {
    return bcrypt.compareSync(String(data), hashPwd)
}

module.exports = {
    encryptPwd, decryptPwd
}