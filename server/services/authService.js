const log  = require('log-util');
const User = require('../models/user');

var AuthService = {};

AuthService.postReset = (email) => {
  return User.find({email: email})
  .then((users) => {
    return users;
  })
  .catch((err) => {
      throw err;
  });
};

AuthService.postConfirm = (username, email, password) => {
  var query = { username: username, email: email };

  return User.findOneAndUpdate(query,
    // the change to be made
    {password: password},

    // an option that asks mongoose to return the updated version of the doc
    {new: true},

    // the callback function
    (err, user) => {
      if (err) {
        throw err;
      } else {
        return user;
      }
    }
  );
};

AuthService.findExistingUser = (username, email) => {
  var query = User.find()
  .and([
      { $or: [{username: username}, {email: email}] }
  ]);
  var promise = query.exec();

  return promise.then((user) => {
    return user;
  });
};

AuthService.postRegister = (username, email, password) => {
  var user = new User({
    username: username,
    email: email,
    password: password
  });

  return user.save()
  .then((u) => {
    return u;
  })
  .catch((err) => {
    throw err;
  });
};

AuthService.postLogin = (username, password) => {
  return User.find({username: username, password: password})
  .then((users) => {
    return users;
  })
  .catch((err) => {
    throw err;
  });
};

module.exports = AuthService;
