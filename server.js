const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path')

const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

// const sess = {
//     secret: 'Super secret',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };

// app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//set up sessions
// const sess = {
//   secret: 'covid info',
//   resave: false,
//   saveUninitialized: false
// };

// app.use(session(sess));

// turn on routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});