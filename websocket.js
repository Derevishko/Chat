class WebSocket{
  constructor(wss) {
    this.wss = wss;
    this.chat = require('./controllers/Chat');
    this.chatModel = require('./models/ChatModel');
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
    let message = JSON.parse(data)
    try {
      await this.chatModel.saveMessage(message);
      this.wss.broadcast(data);
    } catch(err) {
      console.log(err.message)
    }
  }
}

module.exports = WebSocket;