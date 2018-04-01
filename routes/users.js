const express = require('express');
const userRouter = express.Router();

const userController  = require('../controllers/userController');

userRouter.get('/register', userController.getRegister);
userRouter.get('/login',    userController.getLogin);
userRouter.get('/logout',   userController.getLogout);

module.exports = userRouter;
