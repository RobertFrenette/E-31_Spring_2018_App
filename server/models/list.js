const mongoose = require('mongoose');

// List Schema
var ListSchema = new mongoose.Schema({
  user_id: {type: String, required: true},
  name:    {type: String, required:true}
});

module.exports = mongoose.model('List', ListSchema);