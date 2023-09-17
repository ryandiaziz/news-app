const { articleLike, user, article } = require('../models');

class UserArticleController {
    static async getLikedArticles(req, res) {
        try {
            const userId = req.userData.id;
            let articles = []
            let result = await articleLike.findAll({
                where: {
                    userId: userId,
                },
                include: [user, article],
            });
            articles = result.map((el) => {
                return el.article.dataValues;
            });
            res.status(200).json({ articles });
        } catch (error) {
            res.json({
                status: "error",
                message: error.message
            })
        }
    }

    static async addLikedArticle(req, res) {
        try {
            let data = req.body
            const userId = req.userData.id
            let oldArticle = await article.findOne({ where: { title: data.title } });
            if (oldArticle == null) {
                let newArticle = await article.create({
                    source: data.source,
                    author: data.author,
                    title: data.title,
                    description: data.description,
                    url: data.url,
                    urlToImage: data.urlToImage,
                    publishedAt: data.publishedAt,
                    content: data.content,
                })
                let resultNew = await articleLike.create({
                    userId: userId,
                    articleId: +newArticle.id,
                });
                res.json({
                    status: "ok",
                    response: resultNew
                })
            } else if (oldArticle.title == data.title) {
                let resultOld = await articleLike.create({
                    userId: userId,
                    articleId: +oldArticle.id,
                });
                res.json({
                    status: "ok",
                    response: resultOld
                })
            }
        } catch (error) {
            res.json({
                status: "error",
                message: error.message
            })
        }
    }

    static async removeLikedArticle(req, res) {
        try {
            let userId = req.userData.id;
            const articleId = +req.params.articleId;

            let result = await articleLike.destroy({
                where: { userId: userId, articleId: articleId },
            });

            result === 1
                ? res.status(200).json({
                    status: "ok",
                    message: `Deleted complete`
                })
                : res.status(404).json({
                    status: "error",
                    message: `Couldn't deleted.`
                });
            // res.send(`${articleId} ${userId}`)
        } catch (error) {
            res.json({
                status: "error",
                message: error.message
            })
        }
    }

}

module.exports = UserArticleController