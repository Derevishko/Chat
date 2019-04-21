class Auth{
  constructor() {
    this.hash = require('../models/Hash');
    this.userModel = require('../models/UserModel')
  };

  get reg() {
    return async (req, res) => {
      try {
        await this.userModel.createUser(req.body)
        res.status(204);
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
        await this.userModel.findUser(req.body);
        const token = this.hash.createHash( req.body.login + +Date.now() );
        res.status(200).write(token);
      } catch (err) {
        res.status(err.message);
      } finally {
        res.end();
      }
    }
  }
}

module.exports = new Auth();