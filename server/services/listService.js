const log = require('log-util');
const List = require('../models/list');

var listService = {};

listService.getLists = (user_id) => {
  return List.find({user_id: user_id})
  .then((lists) => {
      return lists;
  })
  .catch((err) => {
    throw err;
  });    
};

listService.getList = (list_id) => {
    return List.find({_id: list_id})
    .then((lists) => {
        return lists;
    })
    .catch((err) => {
      throw err;
    });    
};
 
listService.findExistingList = (user_id, listname) => {
  var query = List.find()
  .and([
    { $and: [{user_id: user_id}, {name: listname}] }
  ]);
  var promise = query.exec();

  return promise.then((list) => {
    return list;
  });
};

listService.postList = (listObj) => {
  var list = new List(listObj);

  return list.save()
  .then((l) => {
    return l;
  })
  .catch((err) => {
    throw err;
  });
};

listService.update = (listId, listObj) => {
  return List.findByIdAndUpdate(
          listId,
          {
              $set: listObj
          },
          {
              new: true
          }
      )
      .then((list) => {
          return list;
      })
      .catch((err) => {
          throw err;
      });
};

listService.delete = (listId) => {
  return List.findByIdAndRemove(listId)
  .then((list) => {
    return list;
  })
  .catch((err) => {
    throw err;
  });
};

module.exports = listService;
 