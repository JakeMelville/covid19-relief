<<<<<<< HEAD
const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const path = require('path');
=======
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path')
>>>>>>> 6a84a4d67b64c6dcc2f460cd33736a029abd03d6

const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  // store: new SequelizeStore({
  //     db: sequelize
  // })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
