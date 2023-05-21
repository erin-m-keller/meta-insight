const loginUser = async (event) => { // login user function
    event.preventDefault(); // prevent default event
    const email = document.querySelector('#login-email').value.trim(), // get email value
          password = document.querySelector('#login-password').value.trim(); // get password value
    if (email && password) { // if email and password exist
      const response = await fetch('/api/auth/login', { // fetch login route
        method: 'POST', // post method
        body: JSON.stringify({ email, password }), // body
        headers: { 'Content-Type': 'application/json' }, // headers
      });
      if (response.ok) { // if response is ok
        window.location.href ='/'; // redirect to homepage
      } else { // if response is not ok
        // initialize variables
        const responseData = await response.json(), // get response data
              emailToast = document.querySelector('.login-email-err'), // get email toast
              passToast = document.querySelector('.login-pass-err'); // get password toast
        // check if the error message is specific
        if (responseData.message === 'Email is not registered. Please sign-up.') { // if email is not registered
          emailToast.isOpen = true; // open email toast
        } 
        // check if the error message is specific
        else if (responseData.message === 'Incorrect password.') { // if password is incorrect
          passToast.isOpen = true; // open password toast
        }
      }
    }
};

const signupUser = async (event) => { // signup user function
    event.preventDefault(); // prevent default event
    const username = document.querySelector('#signup-username').value.trim(), // get username value
          email = document.querySelector('#signup-email').value.trim(), // get email value
          password = document.querySelector('#signup-password').value.trim(); // get password value
    if (email && password && username) { // if email, password, and username exist
      const response = await fetch('/api/auth/create', { // fetch create route
        method: 'POST', // post method
        body: JSON.stringify({ username, email, password }), // body
        headers: { 'Content-Type': 'application/json' }, // headers
      });
      console.log("response.ok: " + response.ok); // log response.ok
      if (response.ok) { // if response is ok
        document.location.replace('/'); // redirect to homepage
      } else { // if response is not ok
        // initialize variables
        const responseData = await response.json(), // get response data
              emailToast = document.querySelector('.signup-email-err'), // get email toast
              passToast = document.querySelector('.signup-pass-err'); // get password toast
        if (responseData.errors[0].message === 'Validation len on password failed') { // if password is too short
          passToast.isOpen = true; // open password toast
        } else if (responseData.errors[0].message === 'email must be unique') { // if email is not unique
          emailToast.isOpen = true; // open email toast
        }
      }
    }
};

// event listeners - on form submit
document.querySelector('.login-form').addEventListener('submit', loginUser); // login user
document.querySelector('.signup-form').addEventListener('submit', signupUser); // signup user