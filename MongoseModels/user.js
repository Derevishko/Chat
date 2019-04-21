const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const user = new Schema({
  login: {type: String, unique: true},
  password: {type: String},
})
module.exports = new mongoose.model('User', user);