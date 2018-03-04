// Express Server

// Secure Config
require('./config/config');

// Node Modules
const url = require('url');
const path = require('path');
const fs = require('fs');

// Third-Party Modules
const express = require('express');
const hbs = require('hbs');
const log = require('log-util');
const bodyParser = require('body-parser');

// include routes
const users = require('./routes/users');
const auth = require('./routes/auth');

var app = express();

// register hbs partials
hbs.registerPartials(__dirname + '/views/partials');
// set view engine
app.set('view engine', 'hbs');

// partials
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use routes
app.use('/users', users);
app.use('/auth', auth);

// HBS Routes
// Index page
app.get('/', (req, res) => {
    res.render('index.hbs', {pageTitle: 'myLists'});
});
// Item List page
app.get('/home', (req, res) => {
    res.render('home.hbs', {pageTitle: 'Items'});
});

// Error-handling middleware 
// Handle http 404 response
app.use((request, response, next) => {
    log.error(`404: ${request.url}`);
    response.status(404).redirect('/404.html');
});
// Handle 500 response
app.use((request, response, next) => {
    log.error(`500: ${request.url}`);
    response.status(500).redirect('/error.html');
});

// export app
module.exports = app;
