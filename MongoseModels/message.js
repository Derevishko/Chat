const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const message = new Schema({
  user_id: {type: ObjectId},
  text: {type: String},
  created_at: {type: Date, default: Date.now()}
});
message
module.exports = new mongoose.model('Message', message);