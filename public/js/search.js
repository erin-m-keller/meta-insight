const search = (e) => {
  e.preventDefault();
  document.location.href = `/search/${e.target[0].value}`;
};

const searchForm = document.querySelector("#search-form");

if (searchForm) searchForm.addEventListener("submit", search);
