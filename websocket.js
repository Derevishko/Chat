class WebSocket{
  constructor(wss) {
    this.wss = wss;
    this.chatModel = require('./models/ChatModel');
    this.userModel = require('./models/UserModel');
    wss.on('connection', (ws) => this.connect(ws))
    wss.broadcast = this.broadcast
  }
  broadcast(data, clientValidator = () => true) {
    this.clients.forEach(client => {
      if (clientValidator(client)) {
        client.send(data);
      }
    });
  }
  connect(ws) {    
    ws.on('open', () => this.open(ws) );
    ws.on('message', (data) => this.message(ws, data) );
  }
  open(ws) {
    ws.send('something');
  }
  async message(ws, data) {
    try {
      data = JSON.parse(data)
      console.log(data)
      let user = await this.userModel.getUser(data.user_id);
      delete data.user_id;
      data.user = user.login;
      this.wss.broadcast(JSON.stringify(data));
    } catch(err) {
      console.log(err.message)
    }
  }
}

module.exports = WebSocket;