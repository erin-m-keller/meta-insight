const path = require('path'); // import path module
const express = require('express'); // import express module
const session = require('express-session'); // import express-session module
const exphbs = require('express-handlebars'); // import express-handlebars module
const routes = require('./controllers'); // import routes module
const helpers = require('./utils/helpers'); // import helpers module

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers }); // create handlebars object

const sess = {
  // create session object
  secret: 'Super secret secret', // secret key
  cookie: {
    // cookie object
    maxAge: 34560000, // cookie expires after 400 day
    httpOnly: true, // cookie is not accessible via client-side JS
    secure: false, // cookie is only sent to the server with an encrypted request
    sameSite: 'strict', // cookie is not sent if the domain doesn't match the request origin
  },
  resave: false, // forces the session to be saved back to the session store, even if the session was never modified during the request
  saveUninitialized: true, // forces a session that is "uninitialized" to be saved to the store
  store: new SequelizeStore({
    // create new SequelizeStore object
    db: sequelize, // pass sequelize connection
  }),
};

app.use(session(sess)); // use session object

app.engine('handlebars', hbs.engine); // set handlebars as the default template engine
app.set('view engine', 'handlebars'); // set view engine to handlebars

app.use(express.json()); // parse incoming JSON data
app.use(express.urlencoded({ extended: true })); // parse incoming string or array data
app.use(express.static(path.join(__dirname, 'public'))); // set static folder to public

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now listening on: http://localhost:${PORT}`)
  );
});
