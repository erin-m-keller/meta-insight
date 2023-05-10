const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gamereview extends Model {}


Gamereview.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    //   may look at decimal for 10 scale, 1-5 or 1-5 stars etc
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    // will add back in once user model is created
    //   user_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //       model: 'user',
    //       key: 'id',
    //     },
    //   },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'gamereview',
    }
  );

  module.exports = Gamereview;