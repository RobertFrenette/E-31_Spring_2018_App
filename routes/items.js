const express = require('express');
const itemRouter = express.Router();

const log = require('log-util');
const itemController  = require('../controllers/itemController');

itemRouter.get('/home', itemController.getHome);
itemRouter.get('/',     itemController.getItem);
itemRouter.post('/',    itemController.postItem);
itemRouter.get('/delete/:item_id', itemController.deleteItem);
 
module.exports = itemRouter;
 