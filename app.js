// Simple Node Connect HTTP Server - will be replace with Express later in the Semester
// Node Modules
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

// export app
module.exports = app;
