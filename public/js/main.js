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