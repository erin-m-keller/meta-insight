const router = require('express').Router(),
      { User } = require('../../models');

router.post('/create', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }),
    userData = await User.findOne({ where: { email: newUser.email } });
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'User created successfully!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } }),
          validPassword = await userData.checkPassword(req.body.password);
    if (!userData) {
      res.status(400).json({ message: 'Email is not registered. Please sign-up.' });
      return;
    }
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password.' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in.' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.json({ message: 'Successfully logged out.' });
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;