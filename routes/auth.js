const express = require('express');
const authRouter = express.Router();

const log = require('log-util');

// Include Custom Modules
const mailer = require('./../utils/mailer');
const persist = require('./../utils/persist');

// Auth Routes
// reset pwd
authRouter.get('/reset', (req, res) => {
  res.render('reset.hbs', {pageTitle: 'Password Reset'});
});

// confirm pwd reset - via email link
authRouter.get('/confirm', (req, res) => {
  res.render('confirm.hbs', {pageTitle: 'Password Reset'});
});

// reset pwd
authRouter.post('/reset', (req, res) => {
  // TBD: POST Route for password reset
  let email = request.body.email;
  log.info(`${email}`);

  res.end('POST: /auth/reset');
});

// confirm pwd reset - via email link
authRouter.post('/confirm', (req, res) => {
  // TBD: POST Route for password reset confirm
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  let confirm = req.body.confirm;
  log.info(`${username}, ${email}, ${password}, ${confirm}`);

  res.end('POST: /auth/confirm');
});

// Register a User
authRouter.post('/register', (req, res) => {
  // TBD: POST Route for authenticating registration
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  log.info(`${username}, ${email}, ${password}`);

  //res.end('POST: /auth/register');
  res.status(400).send();
});

// User Login
authRouter.post('/login', (req, res) => {
  // TBD: POST Route for authenticating login
  let username = req.body.username;
  let password = req.body.password;
  log.info(`${username}, ${password}`);

  //res.end('POST: /auth/login');
  res.status(400).send();
});

module.exports = authRouter;
