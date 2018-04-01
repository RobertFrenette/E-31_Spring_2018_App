const log = require('log-util');
const Item = require('../models/item');

var itemController = {};


itemController.getItem = (username) => {
    return Item.find({username: username})
    .then((items) => {
        return items;
    })
    .catch((err) => {
      throw err;
    });    
};
 

itemController.findExistingItem = (username, itemname) => {
  var query = Item.find()
  .and([
    { $and: [{username: username}, {name: itemname}] }
  ]);
  var promise = query.exec();

  return promise.then((item) => {
    return item;
  });
};

itemController.postItem = (itemObj) => {
  var item = new Item(itemObj);

  return item.save()
  .then((i) => {
    return i;
  })
  .catch((err) => {
    throw err;
  });
};

module.exports = itemController;
 