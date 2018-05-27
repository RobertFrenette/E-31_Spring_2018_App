const log = require('log-util');
const Item = require('../models/item');

var itemService = {};

itemService.getItems = (list_id) => {
  return Item.find({list_id: list_id})
  .then((items) => {
      return items;
  })
  .catch((err) => {
    throw err;
  });    
};

itemService.getItem = (item_id) => {
    return Item.find({_id: item_id})
    .then((items) => {
        return items;
    })
    .catch((err) => {
      throw err;
    });    
};
 
itemService.findExistingItem = (list_id, itemname) => {
  var query = Item.find()
  .and([
    { $and: [{list_id: list_id}, {name: itemname}] }
  ]);
  var promise = query.exec();

  return promise.then((item) => {
    return item;
  });
};

itemService.postItem = (itemObj) => {
  var item = new Item(itemObj);

  return item.save()
  .then((i) => {
    return i;
  })
  .catch((err) => {
    throw err;
  });
};

itemService.update = (itemId, itemObj) => {
  return Item.findByIdAndUpdate(
          itemId,
          {
              $set: itemObj
          },
          {
              new: true
          }
      )
      .then((item) => {
          return item;
      })
      .catch((err) => {
          throw err;
      });
};

itemService.delete = (itemId) => {
  return Item.findByIdAndRemove(itemId)
  .then((item) => {
    return item;
  })
  .catch((err) => {
    throw err;
  });
};

module.exports = itemService;
 