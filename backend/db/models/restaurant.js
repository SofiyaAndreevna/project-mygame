'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    static associate({ Comment }) {
      this.hasMany(Comment, { foreignKey: 'comRestId' });
    }
  }
  Restaurant.init(
    {
      title: {
        type: DataTypes.TEXT,
      },
      img: {
        type: DataTypes.TEXT,
      },
      totalgrade: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Restaurant',
    }
  );
  return Restaurant;
};
