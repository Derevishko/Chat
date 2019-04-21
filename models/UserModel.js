class UserModel {
  constructor() {
    this.mongoose = require('./Mongoose');
  }
    
  async createUser(user) {
    try {
      await new this.mongoose.user(user).save();
    } catch (err) {
      throw new Error(409);
    }
  }

  async findUser(user) {
    try {
      let result = await this.mongoose.user.find(user);
      if ( result.length ) return result[0];
      throw new Error(404) 
    } catch (err) {
      if ( err.message == 404 ) throw err;
      throw new Error(400);
    }
  }
}

module.exports = new UserModel();