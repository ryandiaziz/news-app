const jwt = require("jsonwebtoken")
const screetCode = process.env.SECRETCODE


const tokenGenerator = (data) => {
    const { id, name, email } = data;
    return jwt.sign({
        id: id,
        name: name,
        email: email,
    }, screetCode);
};

const tokenVerifier = (data) => {
    return jwt.verify(data, screetCode)

}


module.exports = {
    tokenGenerator, tokenVerifier
}