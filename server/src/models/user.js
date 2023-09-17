'use strict';
const { encryptPwd } = require('../../helper/encrypt')
const {
  Model
} = require('sequelize');
const { use } = require('../routes');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.belongsToMany(models.article, { through: models.articleLike });
    }
  }
  user.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    }, {
    hooks: {
      beforeCreate: (user, option) => {
        user.password = encryptPwd(user.password)
      }
    },
    sequelize,
    modelName: 'user',
  });
  return user;
};