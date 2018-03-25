const express = require('express');
const authRouter = express.Router();

const log = require('log-util');

// Include Custom Modules
const mailer = require('./../utils/mailer');

// Mongoose Model
const {User} = require('./../models/user');

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
  let email = req.body.email;
  log.info(`Password Reset Request: ${email}`);

  User.find({email: email}).then((users) => {
    if (users.length > 0) {
      let uri = req.get('host') + '/';
      mailer.sendResetMail(email, uri);
      res.end();
    } else {
      log.info(`Reset Unsucessful for User: ${username}, ${password}`);
      res.status(400).send();
    }
  }, (err) => {
    log.error(`Reset Error: ${err}`);
    res.status(400).send();
  });
});

// confirm pwd reset - via email link
authRouter.post('/confirm', (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  log.info(`Password Reset Confirm: ${username}, ${email}, ${password}`);

  var query = { username: username, email: email };

  User.findOneAndUpdate(query,
    // the change to be made
    {password: password},

    // an option that asks mongoose to return the updated version of the doc
    {new: true},

    // the callback function
    (err, user) => {
      if (err) {
        // Handle any possible database errors
        log.error(`Confirm Error: ${err}`);
        res.status(400).send();
      } else if (user === null) {
        // User not found
        log.error(`Confirm Error: User with UserName ${username} and email ${email} not found.`);
        res.status(400).send();
      } else {
        log.info(`Confirm Success: Password updated for User: ${username}.`);
        res.end();
      }
    }
  );
});

// Register a User
authRouter.post('/register', (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  log.info(`Register: ${username}, ${email}, ${password}`);

  var user = new User({
    username: username,
    email: email,
    password: password
  });

  User.find()
  .and([
      { $or: [{username: username}, {email: email}] }
  ])
  .exec((err, u) => {
    if (err) { 
      log.error(`Registration Error: ${err}`);
    } else {
      if (u.length === 0) {
        // User does not exist
        user.save().then((u) => {
          let uri = req.get('host') + '/';
          log.info(`Registration Successful for User: ${username}`);
          mailer.sendRegMail(username, email, uri);
          res.end();
        }, (err) => {
          log.error(`Registration Error: ${err}`);
          res.status(400).send();
        });
      } else {
        // User already registered
        log.error(`Registration Error: User with creds ${username} and/or ${email}, ${password} already registered.`);
        res.status(400).send();
      }
    }
  });
});

// User Login
authRouter.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  log.info(`Login: ${username}, ${password}`);

  User.find({username: username, password: password}).then((users) => {
    if (users.length > 0) {
      log.info(`Login Successful for User: ${username}`);
      res.end();
    } else {
      log.info(`Login Unsucessful for User: ${username}, ${password}`);
      res.status(400).send();
    }
  }, (err) => {
    log.error(`Login Error: ${err}`);
    res.status(400).send();
  });
});

module.exports = authRouter;
