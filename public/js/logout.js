const logoutUser = async (event) => { // logout user function
  const response = await fetch('/api/auth/logout', { // fetch logout route
    method: 'POST', // post method
    headers: { 'Content-Type': 'application/json' }, // headers
  });

  if (response.ok) { // if response is ok
    document.location.replace('/login'); // redirect to login page
  } else { // if response is not ok
    alert(response.statusText); // alert response status text
  }
};
