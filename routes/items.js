const express = require('express');
const itemRouter = express.Router();

const log = require('log-util');

// Mongoose Model
const {Item} = require('./../models/item');

itemRouter.get('/home', (req, res) => {
  // Validate we have username in session - set in login
  var username = req.session.username;
  if (username) {
    log.info(`Items Page: ${username}`);
    res.render('home.hbs', {pageTitle: 'Items', userName: username});
  } else {
    // username not passed
    log.error(`Items Page - user not logged in`);
    //res.status(500).send();
    res.redirect('/error.html');
  }
});

itemRouter.get('/', (req, res) => {
  // Validate we have username in session - set in login
  var username = req.session.username;
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
    log.error(`Error: Get Items - user not logged in`);
    res.status(500).send();
  }
});
 
itemRouter.post('/', (req, res) => {
  let username = req.body.username;
  let itemname = req.body.name;
  let description = req.body.desc || ' ';

  var item = new Item({
    username: username,
    name: itemname,
    desc: description
  });

  Item.find()
  .and([
      { $and: [{username: username}, {name: itemname}] }
  ])
  .exec((err, i) => {
    if (err) { 
      log.error(`Add Item Error: ${err}`);
    } else {
      if (i.length === 0) {
        // User does not exist
        item.save().then((i) => {
          res.status(200).send(i);
        }, (err) => {
          log.error(`Add Item Error: ${err}`);
          res.status(500).send();
        });
      } else {
        // Item exists
        log.error(`Add Item Error: Item with name ${itemname} already esists for User ${username}.`);
        res.status(400).send();
      }
    }
  });
});
 
module.exports = itemRouter;
 