const mongoose = require('mongoose');

// User Schema
var UserSchema = new mongoose.Schema({
  username: {type: String, required: true},
  email: {type: String, required:true},
  password: {type: String, required:true}
});

module.exports = mongoose.model('User', UserSchema);