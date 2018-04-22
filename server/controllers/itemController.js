const log         = require('log-util');
const itemService = require('../services/itemService');

var ItemController = {};

ItemController.getItems = (req, res) => {
  let user_id = req.params.user_id;

  if (user_id) {
    log.info(`Get Items Request: ${user_id}`);
    
    itemService.getItems(user_id)
    .then((items) => {
      res.json(items);
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

ItemController.getItem = (req, res) => {
  let item_id = req.params.item_id;

  if (item_id) {
    log.info(`Get Item Request: ${item_id}`);
    
    itemService.getItem(item_id)
    .then((items) => {
      res.json(items);
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
  let user_id = req.body.user_id;
  let itemname = req.body.itemname;
  let description = req.body.description || ' ';

  itemService.findExistingItem(user_id, itemname)
  .then((items) => {
    if (items.length === 0) {
      itemService.postItem({
        user_id: user_id,
        name: itemname,
        desc: description
      })
      .then((items) => {
        res.json(items);
      })
      .catch((err) => {
        log.error(`Add Item Error: ${err}`);
        res.status(500).send();
      });

    } else {
      // Item exists
      log.error(`Add Item Error: Item with name ${itemname} already esists for User ${user_id}.`);
      res.status(400).send();
    }
  })
  .catch((err) => {
    log.error(`Add Item Error: ${err}`);
    res.status(500).send();
  });
};

ItemController.deleteItem = (req, res) => {
  log.info(`Deleting Item: ${req.params.item_id}`);
  itemService.delete(req.params.item_id)
  .then((item) => {
    if (item) {
      //res.end();
      res.json(item);
    } else {
      log.error(`Delete Item Error: Item ${req.params.item_id} not found.`);
      res.status(400).send();
    }
  })
  .catch((err) => {
      log.error(`Deleting Item error: ${err}`);
      res.status(500).send();
  });
};
 
module.exports = ItemController;
 