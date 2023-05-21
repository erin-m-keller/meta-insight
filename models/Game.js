const { Model, DataTypes } = require("sequelize"); // import model and datatypes from sequelize
const sequelize = require("../config/connection"); // import sequelize connection

class Game extends Model {} // create game model class

Game.init( // initialize game model
  {
    id: { // id column
      type: DataTypes.INTEGER, // integer data type
      allowNull: false, // not null
      primaryKey: true, // primary key
      autoIncrement: false, // auto increment
    },
    title: { // title column
      type: DataTypes.STRING, // string data type
      allowNull: false, // not null
      field: 'title', // title field
    },
  },
  {
    sequelize, // pass sequelize connection
    timestamps: false, // no timestamps
    freezeTableName: true, // freeze table name
    underscored: true, // underscored
    modelName: 'game', // model name
  }
);

module.exports = Game; // export game model