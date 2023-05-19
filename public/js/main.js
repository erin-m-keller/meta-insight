/**
 * @clearTxtArea
 * Clears the textarea fields 
 */
function clearTxtArea(event) {
  // prevent default behavior
  event.preventDefault();
  // initialize variables
  const reviewContent = document.querySelector('#review-content textarea');
  // clear the textarea
  reviewContent.value = '';
}

/**
 * @addReview
 * Allows a user to add a review
 * to any game they are currently
 * viewing
 */
const addReview = async (event,gameId,userId,rating) => {
  console.log("rating: " + rating);
  // prevent default behavior
  event.preventDefault();
  // initialize variables
  const ratingToast = document.querySelector('.rating-err'),
        reviewToast = document.querySelector('.review-err'),
        reviewContent = document.querySelector('#review-content');
  if (!rating) {
    ratingToast.isOpen = true;
    return;
  }
  if (!reviewContent.value) {
    reviewToast.isOpen = true;
    return;
  }
  // if all elements have a value
  if (reviewContent.value && gameId && userId && rating) {
    // the response received from the POST request
    const response = await fetch('/api/review/add', {
      method: 'POST',
      body: JSON.stringify({ "description": reviewContent.value, "user_id": userId, "game_id": gameId, "rating": rating }),
      headers: { 'Content-Type': 'application/json' },
    });
    // if reponse ok
    if (response.ok) {
      // fetch the updated comments for the specific post
      const reviewsResponse = await fetch(`/api/review/getReviews/${gameId}`);
      // if reponse ok
      if (reviewsResponse.ok) {
        // initialize variables
        const reviewsData = await reviewsResponse.json();
        // update the reviews section with the recently added reviews
       updateReviews(reviewsData);
       clearTxtArea(event);
      }
      // else if response is not ok
      else {
        // alert prompt with response status text
        alert(reviewsResponse.statusText);
      }
    }
    // else if response is not ok
    else {
      // alert prompt with response status text
      alert(response.statusText);
    }
  }
};

/**
 * @updateReviews
 * Rebuilds the reviews section when a user
 * adds a new review
 */
const updateReviews = (reviewsData) => {
  // initialize variables
  const reviewSection = document.querySelector('.review-section');
  // empty the element
  reviewSection.innerHTML = '';
  // loop through the reviews data
  reviewsData.forEach((review) => {
    // initialize variables
    const reviewElement = document.createElement('div'),
          formattedDate = moment(review.date_created).format('MMMM Do YYYY, h:mm a');
    // create the review
    reviewElement.innerHTML = `
      <ion-item>
        <ion-icon name="person-circle-outline" class="ion-icon"></ion-icon>
        <ion-label>
            <div class="date-time"><small>${formattedDate}</small></div>
            <h2>${review.user.username}</h2>
            <p>${review.description}</p>
        </ion-label>
      </ion-item>
    `;
    // append review
    reviewSection.appendChild(reviewElement);
  });
};

// event listeners - on form submit
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const gameId = document.getElementById("game-id").value,
          loggedInId = document.getElementById("user-id").value,
          reviewRating = document.getElementById("review-rating").value;
    addReview(event, gameId, loggedInId, reviewRating);
  });
});