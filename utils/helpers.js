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
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  // determines if side link is currently active
  isActive: function(url,path) {
    return (url === path) ? false : true;
  }
};
