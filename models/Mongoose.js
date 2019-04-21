const mongoose = require('mongoose');
mongoose.connect( require('../config').mongoose, { useNewUrlParser: true });

const user = require('../MongoseModels/user');
class Mongoose {
  static get user() {
    return user;
  }

}

module.exports = Mongoose;