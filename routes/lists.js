const express = require('express');
const listRouter = express.Router();
 
const list_persist = require('./../utils/list_persist');
 
listRouter.get('/:username', (req, res) => {
  let username = req.params.username;
  if (username) {
    let list = list_persist.getList(username);
    if (list.length > 0) {
      res.end(JSON.stringify(list));
    }
    // no items (or file doesn't exist yet)
    res.status(400).send();
  } else {
    // username not passed
    res.status(500).send();
  }
});
 
listRouter.post('/', (req, res) => {
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
 
module.exports = listRouter;
 