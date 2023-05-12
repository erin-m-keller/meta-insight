const sequelize = require('../config/connection');
const { User,Gamereviews } = require('../models');

const userData = require('./userData.json');
const gamereviewData = require('./gamereviewData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Gamereviews.bulkCreate(gamereviewData, {
    returning: true,
  });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
