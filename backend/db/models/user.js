'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Comment }) {
      this.hasMany(Comment, { foreignKey: 'comUserId' });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.TEXT,
        unique: true,
      },
      name: {
        type: DataTypes.TEXT,
      },
      password: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
