const express = require('express');
const itemRouter = express.Router();

const log = require('log-util');

// Mongoose Model
const {Item} = require('./../models/item');

itemRouter.get('/home/:username', (req, res) => {
  let username = req.params.username;
  if (username) {
    log.info(`Items Page: ${username}`);
    res.render('home.hbs', {pageTitle: 'Items'});
  } else {
    // username not passed
    log.error(`Items Page - no username passed`);
    res.status(500).send();
  }
});

itemRouter.get('/', (req, res) => {
  let username = req.query.username;
  if (username) {
    log.info(`Get Items Request: ${username}`);
    Item.find({username: username}).then((items) => {
        res.end(JSON.stringify(items));
    }, (err) => {
      log.error(`Get Items Error: ${err}`);
      res.status(500).send();
    });    
  } else {
    // username not passed
    log.error(`Error: Get Items - no username passed`);
    res.status(500).send();
  }
});
 
itemRouter.post('/', (req, res) => {
  let username = req.body.username;
  let itemname = req.body.itemname;
  let description = req.body.description || ' ';
 
  if (username && itemname && description) {
    let list = list_persist.insertItem(username, {"name": itemname, "desc": description});
 
    if (list.length > 0) {
      res.end(JSON.stringify(list));
    }
    // no items (or file doesn't exist yet)
    res.status(400).send();
  } else {
    // username and/or itemname and/or quantity not passed
    res.status(500).send();
  }
});
 
module.exports = itemRouter;
 