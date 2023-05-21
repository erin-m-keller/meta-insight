const { Model, DataTypes } = require('sequelize'); // import model and datatypes from sequelize
const sequelize = require('../config/connection'); // import sequelize connection

class Review extends Model {} // create review model class


Review.init( // initialize review model
    {
      id: { // id column
        type: DataTypes.INTEGER, // integer data type
        allowNull: false, // not null
        primaryKey: true, // primary key
        autoIncrement: true, // auto increment
      },
      //   may look at decimal for 10 scale, 1-5 or 1-5 stars etc
      rating: { // rating column
        type: DataTypes.INTEGER, // integer data type
        allowNull: true, // null
        defaultValue: 5 // default value
      },
      description: { // description column
        type: DataTypes.STRING, // string data type
      },
      date_created: { // date created column
        type: DataTypes.DATE, // date data type
        allowNull: false, // not null
        defaultValue: DataTypes.NOW, // default value
      },
      game_id: { // game id column
        type: DataTypes.INTEGER, // integer data type
        references: { // references game model
          model: 'game', // game model
          key: 'id', // id column
        },
      },
      user_id: { // user id column
        type: DataTypes.INTEGER, // integer data type
        references: { // references user model
          model: 'user', // user model
          key: 'id', // id column
        },
      },
    },
    {
      sequelize, // pass sequelize connection
      timestamps: false, // no timestamps
      freezeTableName: true, // freeze table name
      underscored: true, // underscored
      modelName: 'review', // model name
    }
  );

  module.exports = Review; // export review model