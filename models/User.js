const { Model, DataTypes } = require('sequelize'); // import model and datatypes from sequelize
const bcrypt = require('bcrypt'); // import bcrypt
const sequelize = require('../config/connection'); // import sequelize connection

class User extends Model { // create user model class
  checkPassword(loginPw) { // check password method
    return bcrypt.compareSync(loginPw, this.password); // compare login password to user password
  }
}

User.init( // initialize user model
  {
    id: { // id column
      type: DataTypes.INTEGER, // integer data type
      allowNull: false, // not null
      primaryKey: true, // primary key
      autoIncrement: true, // auto increment
    },
    username: { // username column
      type: DataTypes.STRING, // string data type
      allowNull: false, // not null
      // will only allow alphanumeric characters
      validate: { // validate
        isAlphanumeric: true, // is alphanumeric
      },
    },
    email: { // email column
      type: DataTypes.STRING, // string data type
      allowNull: false, // not null
      unique: true, // unique
      validate: { // validate
        isEmail: true, // is email
      },
    },
    password: { // password column
      type: DataTypes.STRING, // string data type
      allowNull: false, // not null
      // must be longer than 8 characters
      validate: { // validate
        len: [8], // length of 8
      },
    },
  },
  {
    hooks: { // include hooks
      beforeCreate: async (newUserData) => { // before create hook
        newUserData.password = await bcrypt.hash(newUserData.password, 10); // hash password with bcrypt and salt of 10 rounds
        return newUserData; // return new user data
      },
      beforeUpdate: async (updatedUserData) => { // before update hook
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10); // hash password with bcrypt and salt of 10 rounds
        return updatedUserData; // return updated user data
      },
    },
    sequelize, // pass sequelize connection
    timestamps: false, // no timestamps
    freezeTableName: true, // freeze table name instead of pluralizing
    underscored: true, // underscored instead of camel-cased
    modelName: 'user', // model name
  }
);

module.exports = User; // export user model
