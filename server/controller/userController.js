const { user } = require("../models");
const fs = require("fs");
// const { decryptPwd } = require("../helper/encrypt");
// const { tokenGenerator, tokenVerifier } = require("../helper/jsonwebtoken");

class UserController {
    static async getUsers(req, res) {
        try {
            let users = await user.findAll();
            res.status(200).json(users);
            // res.send("ini user")
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

}

module.exports = UserController;