class User{
  constructor() {
    this.userModel = require('../models/UserModel')
  }
  get user() {
    return async (req,res) => {
      try {
        let login = await this.userModel.getUser(req.params.userId);
        res.status(200).json({login});
      } catch (err) {
        res.status(err.message);
      } finally {
        res.end()
      }
    }
  }
}

module.exports = new User();