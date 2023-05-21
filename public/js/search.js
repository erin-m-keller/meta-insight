const search = (e) => {
  // enables search functionality
  e.preventDefault(); // prevent default event
  const searchQuery = e.target[0].value.trim(); // get search query value and trim whitespace from both sides
  if (searchQuery) {
    // if search query exists
    document.location.href = `/search/${e.target[0].value}`; // redirect to search page with search query
  }
};

const searchForm = document.querySelector("#search-form"); // get search form

if (searchForm) searchForm.addEventListener("submit", search); // if search form exists, add event listener to search form
