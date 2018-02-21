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

// HBS Routes
// Index page
app.get('/', (req, res) => {
    //log.info('Loading: /');
    res.render('index.hbs', {pageTitle: 'myLists'});
});
// User Routes
app.get('/register', (req, res) => {
    //log.info('Loading: /register');
    res.render('register.hbs', {pageTitle: 'Register'});
});
app.get('/login', (req, res) => {
    //log.info('Loading: /login');
    res.render('login.hbs', {pageTitle: 'Login'});
});
app.get('/logout', (req, res) => {
    //log.info('Loading: /logout');
    res.render('index.hbs', {pageTitle: 'myLists'});
});
// reset pwd
app.get('/reset', (req, res) => {
    //log.info('Loading: /reset');
    res.render('reset.hbs', {pageTitle: 'Password Reset'});
});
// confirm pwd reset - via email link
app.get('/confirm', (req, res) => {
    //log.info('Loading: /confirm');
    res.render('confirm.hbs', {pageTitle: 'Password Reset'});
});

// Item List page
app.get('/home', (req, res) => {
    //log.info('Loading: /home');
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
