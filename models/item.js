const mongoose = require('mongoose');

// Item Schema
var ItemSchema = new mongoose.Schema({
  username: {type: String, required: true},
  name:     {type: String, required:true},
  desc:     {type: String, required:false}
});

module.exports = mongoose.model('Item', ItemSchema);