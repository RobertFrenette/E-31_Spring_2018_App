const express = require('express');
const authController  = require('../controllers/authController');
const listController  = require('../controllers/listController');
const itemController  = require('../controllers/itemController');
var router = express.Router();

// Preflight Middleware
router.use((req, res, next) => {
  res.set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
  });
  // check for Preflight
  if(req.method === 'OPTIONS'){
    return res.status(200).end();
  }
  next();
});

// Auth Routes
router.post('/register', authController.postRegister);
router.post('/login',    authController.postLogin);
router.post('/reset',    authController.postReset);
router.post('/confirm',  authController.postConfirm);

// List Routes
router.get('/lists/:user_id',   listController.getLists);
router.get('/list/:list_id',    listController.getList);
router.post('/list',            listController.postList);
router.put('/list',             listController.updateList);
router.delete('/list/:list_id', listController.deleteList);

// Item Routes
router.get('/items/:list_id',   itemController.getItems);
router.get('/item/:item_id',    itemController.getItem);
router.post('/item',            itemController.postItem);
router.put('/item',             itemController.updateItem);
router.delete('/item/:item_id', itemController.deleteItem);

module.exports = router;
