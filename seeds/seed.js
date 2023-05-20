const sequelize = require('../config/connection');
const { User, Review, Game } = require('../models');

const userData = require('./userData.json');
const gamereviewData = require('./gamereviewData.json');
const gameData = require('./gameData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Game.bulkCreate(gameData, {
    individualHooks: true,
    returning: true,
  });

  await Review.bulkCreate(gamereviewData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
