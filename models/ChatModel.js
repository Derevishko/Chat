class ChatModel {
  constructor() {
    this.mongoose = require('./Mongoose');
  } 

  async saveMessage(message) {
    try {
      // message.user_id = this.mongoose.generateKey(message.user_id);
      await this.mongoose.message(message).save();
    } catch (err) {
      throw new Error(400);
    }
  }

  async getMessages(from, to) {
    try {
      let result = await this.mongoose.message.find();
      if ( result.length ) return result[0];
      throw new Error(404) 
    } catch (err) {
      if ( err.message == 404 ) throw err;
      throw new Error(400);
    }
  }
}

module.exports = new ChatModel();