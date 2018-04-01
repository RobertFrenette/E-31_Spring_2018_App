const log         = require('log-util');
const authService = require('../services/authService');
const mailer      = require('./../utils/mailer');

var AuthController = {};

AuthController.getReset = (req, res) => {
  res.render('reset.hbs', {pageTitle: 'Password Reset'});
};

AuthController.getConfirm = (req, res) => {
  res.render('confirm.hbs', {pageTitle: 'Password Reset', qry_email_Address: req.query.email});
};

AuthController.postReset = (req, res) => {
  let email = req.body.email;
  log.info(`Password Reset Request: ${email}`);

  authService.postReset({email: email})
  .then((users) => {
    if (users.length > 0) {
      let uri = req.get('host') + '/';
      mailer.sendResetMail(email, uri);
      res.end();
    } else {
      log.info(`Reset Unsucessful for User: ${username}, ${password}`);
      res.status(400).send();
    }
  })
  .catch((err) => {
    log.error(`Reset Error: ${err}`);
    res.status(400).send();
  });
};

AuthController.postConfirm = (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  log.info(`Password Reset Confirm: ${username}, ${email}, ${password}`);

  authService.postConfirm(username, email, password)
  .then((users) => {
    if (users.length > 0) {
      log.info(`Confirm Success: Password updated for User: ${username}.`);
      res.end();
    } else {
      // User not found
      log.error(`Confirm Error: User with UserName ${username} and email ${email} not found.`);
      res.status(400).send();
    }
  })
  .catch((err) => {
    log.error(`Confirm Error: ${err}`);
    res.status(400).send();
  });
};

AuthController.postRegister = (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  log.info(`Register: ${username}, ${email}, ${password}`);

  authService.findExistingUser(username, email)
  .then((users) => {
    if (users.length === 0) {
      authService.postRegister(username, email, password)
      .then(() => {
        let uri = req.get('host') + '/';
        log.info(`Registration Successful for User: ${username}`);
        mailer.sendRegMail(username, email, uri);
        res.end();
      })
      .catch((err) => {
        log.error(`Registration Error: ${err}`);
        res.status(400).send();
      });
    } else {
      // User already registered
      log.error(`Registration Error: User with creds ${username} and/or ${email}, ${password} already registered.`);
      res.status(400).send();
    }
  })
  .catch((err) => {
    log.error(`Registration Error: ${err}`);
    res.status(400).send();
  });
};

AuthController.postLogin = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  log.info(`Login: ${username}, ${password}`);

  authService.postLogin(username, password)
  .then((users) => {
    if (users.length > 0) {
      // put username in session - validate on Home / Items page
      req.session.username = username;
      log.info(`Login Successful for User: ${username}`);
      res.end();
    } else {
      log.info(`Login Unsucessful for User: ${username}, ${password}`);
      res.status(400).send();
    }
  }, (err) => {
    log.error(`Login Error: ${err}`);
    res.status(400).send();
  })
  .catch((err) => {
    log.error(`Login Error: ${err}`);
    res.status(400).send();
  });
};

module.exports = AuthController;
