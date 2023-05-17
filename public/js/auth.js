const loginUser = async (event) => {
    console.log(event);
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
        alert(JSON.stringify(response) + ' - Failed to log in');
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
        const err = await response.json(),
              errMsg = err.errors[0].message;
        console.log(errMsg);
        if (errMsg === 'Validation len on password failed') {
          $('#password-length').removeClass('hidden').addClass('visible');
        } else if (errMsg === 'email must be unique') {
          $('#invalid-email').removeClass('hidden').addClass('visible');
        }
      }
    }
};