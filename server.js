// Express Server
// Node Modules
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

// Third-Party Modules
const express = require('express');
const hbs = require('hbs');
const log = require('log-util');

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

const port = 8080;
const server = http.createServer(app).listen(port);

server.on('listening', () => {
	log.info(`Server Listening on ${server.address().port}`);
});
