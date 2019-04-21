const mongoose = require('mongoose');
mongoose.connect( require('../config').mongoose, { useNewUrlParser: true });

const user = require('../MongoseModels/user');
const message = require('../MongoseModels/message');
class Mongoose {
  static generateKey(key) {return mongoose.Types.ObjectId(key)}
  static get user() {return user;}
  static get message() {return message;}
}

module.exports = Mongoose;