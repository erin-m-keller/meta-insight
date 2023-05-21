const Sequelize = require('sequelize'); // import sequelize
require('dotenv').config(); // import dotenv

let sequelize; // initialize sequelize

if (process.env.JAWSDB_URL) { // if the JAWSDB_URL environment variable exists
  sequelize = new Sequelize(process.env.JAWSDB_URL); // set sequelize to a new Sequelize instance using the JAWSDB_URL
} else { // if the JAWSDB_URL environment variable does not exist
  sequelize = new Sequelize( // set sequelize to a new Sequelize instance using the local database credentials
    process.env.DB_NAME, // database name
    process.env.DB_USER, // database user
    process.env.DB_PASSWORD, // database password
    {
      host: 'localhost', // database host
      dialect: 'mysql', // database dialect
      port: 3306 // database port
    }
  );
}

module.exports = sequelize; // export sequelize
