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
  res.render('confirm.hbs', {pageTitle: 'Password Reset', qry_email_Address: req.query.email});
});

// reset pwd
authRouter.post('/reset', (req, res) => {
  // TBD: POST Route for password reset
  let email = req.body.email;
  log.info(`Password Reset Request: ${email}`);

  let user = persist.getUserByEmail(email);
  if (user) {
    // success
    mailer.sendResetMail(email);
    res.end();
  }
  res.status(400).send();
});

// confirm pwd reset - via email link
authRouter.post('/confirm', (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  log.info(`Password Reset Confirm: ${username}, ${email}, ${password}`);

  let user = persist.getUserByUserNameAndEmail(username, email);
  if (user) {
    let updatedUser = persist.updateUser(username, email, password);
    if (updatedUser) {
      res.end();
    } else {
      res.status(400).send();
    }
  }
  res.status(400).send();
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
    mailer.sendRegMail(username, email);
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
