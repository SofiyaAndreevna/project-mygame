'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Restaurant }) {
      this.belongsTo(User, { foreignKey: 'comUserId' });
      this.belongsTo(Restaurant, { foreignKey: 'comRestId' });
    }
  }
  Comment.init(
    {
      comUserId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      comRestId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Restaurants',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      title: {
        type: DataTypes.TEXT,
      },
      text: {
        type: DataTypes.TEXT,
      },
      grade: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  );
  return Comment;
};
