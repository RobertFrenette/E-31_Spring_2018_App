require('dotenv').config();

// Node Modules
const path = require('path');
const fs   = require('fs');

// Third-Party Modules
const express    = require('express');
const log        = require('log-util');
const bodyParser = require('body-parser');

// include routes
const api = require('./routes/api');

// init DB Connection
const {mongoose} = require('./db/mongoose');

// Config for JSON in req
const jsonParser = bodyParser.json();

var app = express();

// Middleware
app.use('/api', jsonParser, api);

// Error-handling middleware 
app.use((req, res, next) => {
    log.error(`404: ${req.url}`);
    res.status(404).end();
});
app.use((req, res, next) => {
    log.error(`500: ${req.url}`);
    res.status(500).end();
});

// export app
module.exports = app;
