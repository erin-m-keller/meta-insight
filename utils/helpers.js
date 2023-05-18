// initialize variables
const moment = require('moment');

module.exports = {
  // Helper function returns a randomly generated book emoji
  get_emoji: () => {
    const randomNum = Math.random();
    let book = "📗";

    if (randomNum > 0.7) {
      book = "📘";
    } else if (randomNum > 0.4) {
      book = "📙";
    }

    return `<span for="img" aria-label="book">${book}</span>`;
  },
  // Helper function returns a formatted date
  format_date: function(date) {
      return moment(date).format('MMMM Do YYYY, h:mm a');
  },
  // determines if side link is currently active
  isActive: function(url,path) {
    return (url === path) ? false : true;
  },
  // determines if path does not equal a certain value
  notEqual: function(a, b, options) {
    return (a !== b) ? options.fn(this) : options.inverse(this);
  },
  toJson: function (obj) {
      return JSON.stringify(obj, null, 3);
  }
};
