class Auth{
  constructor() {
    this.userModel = require('../models/UserModel')
  };

  get reg() {
    return async (req, res) => {
      try {
        let result = await this.userModel.createUser(req.body)
        res.status(200).write(result._id.toString());
      } catch (err) {
        res.status(err.message);
      } finally {
        res.end(); 
      }
    }
  };
  
  get log() {
    return async (req, res) => {
      try {
        let result = await this.userModel.findUser(req.body);
        res.status(200).write(result._id.toString());
      } catch (err) {
        res.status(err.message);
      } finally {
        res.end();
      }
    }
  }
}

module.exports = new Auth();