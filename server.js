const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set up sessions
const sess = {
  secret: 'covid info',
  resave: false,
  saveUninitialized: false
};

app.use(session(sess));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});