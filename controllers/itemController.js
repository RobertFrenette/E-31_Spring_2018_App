const log         = require('log-util');
const itemService = require('../services/itemService');

var ItemController = {};

ItemController.getHome = (req, res) => {
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
};

ItemController.getItem = (req, res) => {
  // Validate we have username in session - set in login
  var username = req.session.username;
  if (username) {
    log.info(`Get Items Request: ${username}`);
    
    itemService.getItem(username)
    .then((items) => {
      if (items.length > 0) {
        res.end(JSON.stringify(items));
      } else {
        res.status(500).send();
      }
    })
    .catch((err) => {
      log.error(`Get Items Error: ${err}`);
      res.status(500).send();
    });
  } else {
    // username not passed
    log.error(`Error: Get Items - user not logged in`);
    res.status(500).send();
  }
};

ItemController.postItem = (req, res) => {
  let username = req.body.username;
  let itemname = req.body.name;
  let description = req.body.desc || ' ';


  itemService.findExistingItem(username, itemname)
  .then((items) => {
    if (items.length === 0) {
      itemService.postItem({
        username: username,
        name: itemname,
        desc: description
      })
      .then((items) => {
        res.status(200).send(items);
      })
      .catch((err) => {
        log.error(`Add Item Error: ${err}`);
        res.status(500).send();
      });

    } else {
      // Item exists
      log.error(`Add Item Error: Item with name ${itemname} already esists for User ${username}.`);
      res.status(400).send();
    }
  })
  .catch((err) => {
    log.error(`Add Item Error: ${err}`);
    res.status(500).send();
  });
};
 
module.exports = ItemController;
 