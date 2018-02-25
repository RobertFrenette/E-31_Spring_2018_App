const express = require('express');
const authRouter = express.Router();

// Include Custom Modules
const mailer = require('./../utils/mailer');

// Auth Routes
// reset pwd
authRouter.get('/reset', (req, res) => {
  res.render('reset.hbs', {pageTitle: 'Password Reset'});
});
// confirm pwd reset - via email link
authRouter.get('/confirm', (req, res) => {
  res.render('confirm.hbs', {pageTitle: 'Password Reset'});
});

module.exports = authRouter;
