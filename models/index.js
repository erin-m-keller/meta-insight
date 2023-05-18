// initialize variables
const Game = require('./Game'),
      Review = require('./Review'),
      User = require('./User');

// User: one-to-many (user has many Reviews)
User.hasMany(Review, {
  foreignKey: 'user_id' // foreign key in Review model referencing user_id in User model,
});

// Game: one-to-many (game has many Reviews)
Game.hasMany(Review, {
  foreignKey: 'game_id', // foreign key in Review model referencing id in Game model
  onDelete: 'CASCADE' // when a game is deleted, all associated reviews are also deleted
});

// Review: many-to-one (Review belongs to a user)
Review.belongsTo(User, {
  foreignKey: 'user_id' // foreign key in Review model referencing user_id in User model
});

// Review: many-to-one (Review belongs to a game)
Review.belongsTo(Game, {
  foreignKey: 'game_id' // foreign key in Review model referencing id in game model
});

// Export the models
module.exports = { Game, Review, User };