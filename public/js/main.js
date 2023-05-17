const getAllGames = async (event) => {
    // prevent default behavior
    event.preventDefault();
    // the response received from the POST request
    const response = await fetch('/api/game/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    });
    // if reponse ok
    if (response.ok) {
    // call @clearBlog function
    clearBlog(event);
    // call @updateBlogList function
    updateBlogList();

    } 
    // else if response is not ok
    else {
    // alert prompt with response status text
    alert(response.statusText);
    }
  };

/**
 * @addReview
 * Allows a user to add a review
 * to any game they are currently
 * viewing
 */
const addReview = async (event,gameId,userId) => {
  // prevent default behavior
  event.preventDefault();
  // initialize variables
  const commentContent = document.querySelector('#review-content').value;
  
  console.log(gameId);
  console.log(commentContent);
  console.log(userId);
  // // if all elements have a value
  // if (commentContent && userId && postId) {
  //   // the response received from the POST request
  //   const response = await fetch('/api/comment/add', {
  //     method: 'POST',
  //     body: JSON.stringify({ comment_content: commentContent, user_id: userId, post_id: postId }),
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  //   // if reponse ok
  //   if (response.ok) {
  //     // fetch the updated comments for the specific post
  //     const commentsResponse = await fetch(`/api/comment/getComments/${postId}`);
  //     // if reponse ok
  //     if (commentsResponse.ok) {
  //       // initialize variables
  //       const commentsData = await commentsResponse.json();
  //       // update the comments section with the recently added comments
  //       updateComments(commentsData, postId);
  //     }
  //     // else if response is not ok
  //     else {
  //       // alert prompt with response status text
  //       alert(commentsResponse.statusText);
  //     }
  //   }
  //   // else if response is not ok
  //   else {
  //     // alert prompt with response status text
  //     alert(response.statusText);
  //   }
  // }
};