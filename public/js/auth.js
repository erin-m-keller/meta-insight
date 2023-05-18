const loginUser = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#login-email').value.trim(),
          password = document.querySelector('#login-password').value.trim();
    if (email && password) {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        window.location.href ='/';
      } else {
        // initialize variables
        const responseData = await response.json(),
              emailToast = document.querySelector('.login-email-err'),
              passToast = document.querySelector('.login-pass-err');
        // check if the error message is specific
        if (responseData.message === 'Email is not registered. Please sign-up.') { 
          emailToast.isOpen = true;
        } 
        // check if the error message is specific
        else if (responseData.message === 'Incorrect password.') { 
          passToast.isOpen = true;
        }
      }
    }
};

const signupUser = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#signup-username').value.trim(),
          email = document.querySelector('#signup-email').value.trim(),
          password = document.querySelector('#signup-password').value.trim();
    if (email && password && username) {
      const response = await fetch('/api/auth/create', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log("response.ok: " + response.ok);
      if (response.ok) {
        document.location.replace('/');
      } else {
        // initialize variables
        const responseData = await response.json(),
              emailToast = document.querySelector('.signup-email-err'),
              passToast = document.querySelector('.signup-pass-err');
        if (responseData.errors[0].message === 'Validation len on password failed') {
          passToast.isOpen = true;
        } else if (responseData.errors[0].message === 'email must be unique') {
          emailToast.isOpen = true;
        }
      }
    }
};

// event listeners - on form submit
document.querySelector('.login-form').addEventListener('submit', loginUser);
document.querySelector('.signup-form').addEventListener('submit', signupUser);