const router = require('express').Router(), // import router
      { User } = require('../../models'); // import user model

router.post('/create', async (req, res) => { // create user route
  try {
    const newUser = await User.create({ // create user
      username: req.body.username, // set username
      email: req.body.email, // set email
      password: req.body.password // set password
    }),
    userData = await User.findOne({ where: { email: newUser.email } }); // find user data
    req.session.save(() => { // save session
      req.session.logged_in_id = userData.id; // set logged in id
      req.session.logged_in = true; // set logged in
      res.json({ user: userData, message: 'User created successfully!' }); // send json response
    });
  } catch (err) { // catch error if any
    res.status(400).json(err); // send error response
  }
});

router.post('/login', async (req, res) => { // login user route
  try {
    const userData = await User.findOne({ where: { email: req.body.email } }); // find user data
    if (!userData) { // if no user data
      res.status(400).json({ message: 'Email is not registered. Please sign-up.' }); // send error response
      return; // return
    }
    const validPassword = await userData.checkPassword(req.body.password); // check password
    if (!validPassword) { // if password is not valid
      res.status(400).json({ message: 'Incorrect password.' }); // send error response
      return; // return
    }
    req.session.save(() => { // save session
      req.session.logged_in_id = userData.id; // set logged in id
      req.session.logged_in = true; // set logged in
      res.json({ user: userData, message: 'You are now logged in.' }); // send json response
    });
  } catch (err) { // catch error if any
    res.status(400).json(err); // send error response
  }
});

router.post('/logout', (req, res) => { // logout user route
  if (req.session.logged_in) { // if logged in
    req.session.destroy(() => { // destroy session
      res.json({ message: 'Successfully logged out.' }); // send json response
    });
  } else { // if not logged in
    res.status(404).end(); // send error response
  }
});

module.exports = router; // export router