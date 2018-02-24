const express = require('express');
const userRouter = express.Router();

// User Routes
userRouter.get('/register', (req, res) => {
  res.render('register.hbs', {pageTitle: 'Register'});
});
userRouter.get('/login', (req, res) => {
  res.render('login.hbs', {pageTitle: 'Login'});
});
userRouter.get('/logout', (req, res) => {
  res.render('index.hbs', {pageTitle: 'myLists'});
});

module.exports = userRouter;
