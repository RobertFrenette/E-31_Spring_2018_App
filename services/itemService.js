const log = require('log-util');
const Item = require('../models/item');

var itemController = {};


itemController.getItem = (user_id) => {
    return Item.find({user_id: user_id})
    .then((items) => {
        return items;
    })
    .catch((err) => {
      throw err;
    });    
};
 

itemController.findExistingItem = (user_id, itemname) => {
  var query = Item.find()
  .and([
    { $and: [{user_id: user_id}, {name: itemname}] }
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


itemController.delete = (itemId) => {
  return Item.findByIdAndRemove(itemId)
  .then((item) => {
    return item;
  })
  .catch((err) => {
    throw err;
  });
};
module.exports = itemController;
 