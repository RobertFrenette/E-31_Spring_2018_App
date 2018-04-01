const express = require('express');
const authRouter = express.Router();

const log = require('log-util');
const authController  = require('../controllers/authController');

authRouter.get('/reset',     authController.getReset);
authRouter.get('/confirm',   authController.getConfirm);
authRouter.post('/reset',    authController.postReset);
authRouter.post('/confirm',  authController.postConfirm);
authRouter.post('/register', authController.postRegister);
authRouter.post('/login',    authController.postLogin);

module.exports = authRouter;
