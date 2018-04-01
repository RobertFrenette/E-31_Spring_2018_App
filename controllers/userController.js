const log = require('log-util');
var UserController = {};

UserController.getRegister = (req, res) => {
  res.render('register.hbs', {pageTitle: 'Register'});
};
UserController.getLogin = (req, res) => {
  res.render('login.hbs', {pageTitle: 'Login'});
};
UserController.getLogout = (req, res) => {
  // invalidate username in session - until next login
  log.info(`Logout: ${req.session.username}`);
  req.session.username = null;
  res.render('index.hbs', {pageTitle: 'myLists'});
};

module.exports = UserController;
