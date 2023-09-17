const { user } = require("../src/models");
const { decryptPwd } = require("../helper/encrypt")
const { tokenGenerator } = require("../helper/jsonwebtoken")

class UserController {
    static async getUsers(req, res) {
        try {
            let users = await user.findAll();
            res.status(200).json({
                status: "ok",
                data: users
            })
        } catch (err) {
            res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    }

    static async createUser(req, res) {
        try {
            const { name, email, password } = req.body
            let result = await user.create({
                name: name,
                email: email,
                password: password,
            })
            res.status(201).json({
                status: "oke",
                data: result
            })
        } catch (err) {
            res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body
            let account = await user.findOne({ where: { email: email } })

            if (account) {
                if (decryptPwd(password, account.password)) {
                    let access_token = tokenGenerator(account)
                    res.status(200).json({
                        status: "ok",
                        access_token: access_token,
                    });
                } else {
                    res.status(403).json({
                        status: "error",
                        message: "invalid password"
                    })
                }
            } else {
                res.status(404).json({
                    status: "error",
                    message: "User not found"
                })
            }
        } catch (err) {
            res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    }

    static async getAccount(req, res) {
        try {
            let result = req.userData;
            res.status(200).json({
                status: "ok",
                user: result
            });
        } catch (err) {
            res.status(500).json({
                status: "error",
                message: err.message
            });
        }
    }

}

module.exports = UserController