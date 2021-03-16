const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded( { extend : false }));

app.use(express.static(path.join(__dirname, 'public')));





module.exports = app;