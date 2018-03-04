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
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  log.info(`Register: ${username}, ${email}, ${password}`);

  let user = persist.insertUser(username, email, password);
  if (user) {
    // success
    res.end();
  }
  res.status(400).send();
});

// User Login
authRouter.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  log.info(`Login: ${username}, ${password}`);

  let user = persist.getUserByUserNameAndPassword(username, password);
  if (user) {
    // success
    res.end();
  }
  res.status(400).send();
});

module.exports = authRouter;
