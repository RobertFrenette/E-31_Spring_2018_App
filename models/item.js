const mongoose = require('mongoose');

// Item Schema
var Item = mongoose.model('Item', {
  username: {type: String, required: true},
  name:     {type: String, required:true},
  desc:     {type: String, required:false}
});

module.exports = {
  Item
};