const log         = require('log-util');
const listService = require('../services/listService');

var ListController = {};

ListController.getLists = (req, res) => {
  let user_id = req.params.user_id;

  if (user_id) {
    log.info(`Get Lists Request: ${user_id}`);
    
    listService.getLists(user_id)
    .then((lists) => {
      res.json(lists);
    })
    .catch((err) => {
      log.error(`Get Lists Error: ${err}`);
      res.status(500).send();
    });
  } else {
    // username not passed
    log.error(`Error: Get Lists - user not logged in`);
    res.status(500).send();
  }
};

ListController.getList= (req, res) => {
  let list_id = req.params.list_id;

  if (list_id) {
    log.info(`Get List Request: ${list_id}`);
    
    listService.getList(list_id)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      log.error(`Get List Error: ${err}`);
      res.status(500).send();
    });
  } else {
    // username not passed
    log.error(`Error: Get List - user not logged in`);
    res.status(500).send();
  }
};

ListController.postList = (req, res) => {
  let user_id = req.body.user_id;
  let listname = req.body.listname;
  console.log(`${user_id}: ${listname}`);

  listService.findExistingList(user_id, listname)
  .then((lists) => {
    if (lists.length === 0) {
      listService.postList({
        user_id: user_id,
        name: listname
      })
      .then((lists) => {
        res.json(lists);
      })
      .catch((err) => {
        log.error(`Add List Error: ${err}`);
        res.status(500).send();
      });

    } else {
      // List exists
      log.error(`Add List Error: List with name ${listname} already esists for User ${user_id}.`);
      res.status(400).send();
    }
  })
  .catch((err) => {
    log.error(`Add List Error: ${err}`);
    res.status(500).send();
  });
};

ListController.updateList = (req, res) => {
  log.info(`Updating List: ${req.params.list_id}`);
  listService.update(
      req.body.list_id,
      {
        user_id: req.body.user_id,
        name: req.body.name
      },
      {new: true}
  )
  .then((list) => {
      res.json(list);
  })
  .catch((err) => {
    log.error(`Updating List error: ${err}`);
    res.status(500).send();
  });
};

ListController.deleteList = (req, res) => {
  log.info(`Deleting List: ${req.params.list_id}`);
  listService.delete(req.params.list_id)
  .then((list) => {
    if (list) {
      res.json(list);
    } else {
      log.error(`Delete List Error: List ${req.params.list} not found.`);
      res.status(400).send();
    }
  })
  .catch((err) => {
      log.error(`Deleting List error: ${err}`);
      res.status(500).send();
  });
};
 
module.exports = ListController;
 