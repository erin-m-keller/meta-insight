const User = require('./User');
const Gamereviews = require('./Gamereview');


User.hasMany(Gamereviews,  {
    foreignKey: 'user_id',
    onDelete:'CASCADE'
});

Gamereviews.belongsTo(User,  {
    foreignKey: 'user_id'
});

module.exports = { User, Gamereviews };
