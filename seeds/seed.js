const sequelize = require('../config/connection'); // import sequelize connection
const { User, Review, Game } = require('../models'); // import models

const userData = require('./userData.json'); // import user data
const gamereviewData = require('./gamereviewData.json'); // import gamereview data
const gameData = require('./gameData.json'); // import game data

const seedDatabase = async () => { // seed database function
  await sequelize.sync({ force: true }); // sync sequelize models to the database, then turn on the server

  await User.bulkCreate(userData, { // bulk create user data
    individualHooks: true, // individual hooks
    returning: true, // return data
  });

  await Game.bulkCreate(gameData, { // bulk create game data
    individualHooks: true, // individual hooks
    returning: true, // return data
  });

  await Review.bulkCreate(gamereviewData, { // bulk create gamereview data
    returning: true, // return data
  });

  process.exit(0); // exit process
};

seedDatabase(); // call seed database function
