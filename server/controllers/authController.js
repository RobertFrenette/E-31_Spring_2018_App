const log         = require('log-util');
const authService = require('../services/authService');
const mailer      = require('./../utils/mailer');

var AuthController = {};

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
      log.info(`Login Successful for User: ${username}`);
      res.json({'_id': users[0]._id});
    } else {
      log.error(`Login Unsucessful for User: ${username}, ${password}`);
      res.status(400).send();
    }
  })
  .catch((err) => {
    log.error(`Login Error: ${err}`);
    res.status(400).send();
  });
};

AuthController.postReset = (req, res) => {
  let email = req.body.email;
  log.info(`Password Reset Request: ${email}`);

  authService.postReset(email)
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
  .then((user) => {
    if (user) {
      log.info(`Confirm Success: Password updated for User: ${user.username}.`);
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

module.exports = AuthController;
