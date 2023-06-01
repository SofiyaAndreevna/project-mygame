"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Title extends Model {
    static associate({ Question }) {
      this.hasMany(Question, { foreignKey: "titleId" });
    }
  }
  Title.init(
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Title",
    }
  );
  return Title;
};
