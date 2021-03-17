const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
sequelize.sync().then(()=> {
  console.log("Working DB ")
  app.listen(PORT, () => console.log('Now listening'));
}).catch((err)=> {
  console.log(err,  " Something is not rihght here ")
})
// turn on routes
app.use(routes);

// turn on connection to db and server
// sequelize.sync({ force: false }).then(() => {
  
// });