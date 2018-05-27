const log         = require('log-util');
const itemService = require('../services/itemService');

var ItemController = {};

ItemController.getItems = (req, res) => {
  let list_id = req.params.list_id;

  if (list_id) {
    log.info(`Get Items Request: ${list_id}`);
    
    itemService.getItems(list_id)
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
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {
      log.error(`Get Item Error: ${err}`);
      res.status(500).send();
    });
  } else {
    // username not passed
    log.error(`Error: Get Item - user not logged in`);
    res.status(500).send();
  }
};

ItemController.postItem = (req, res) => {
  let list_id = req.body.list_id;
  let itemname = req.body.itemname;
  let description = req.body.description || ' ';

  itemService.findExistingItem(list_id, itemname)
  .then((items) => {
    if (items.length === 0) {
      itemService.postItem({
        list_id: list_id,
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
      log.error(`Add Item Error: Item with name ${itemname} already esists for List ${list_id}.`);
      res.status(400).send();
    }
  })
  .catch((err) => {
    log.error(`Add Item Error: ${err}`);
    res.status(500).send();
  });
};

ItemController.updateItem = (req, res) => {
  log.info(`Updating Item: ${req.body.item_id}`);
  itemService.update(
      req.body.item_id,
      {
        list_id: req.body.list_id,
        name: req.body.name,
        desc: req.body.desc
      },
      {new: true}
  )
  .then((item) => {
      res.json(item);
  })
  .catch((err) => {
    log.error(`Updating Item error: ${err}`);
    res.status(500).send();
  });
};

ItemController.deleteItem = (req, res) => {
  log.info(`Deleting Item: ${req.params.item_id}`);
  itemService.delete(req.params.item_id)
  .then((item) => {
    if (item) {
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
 