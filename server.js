const express = require('express');
const http = require('http');
const app = express();
const WebSocket = require('ws');

const server = http.createServer( app );
const wss = new WebSocket.Server({ server });

app.use( require("body-parser").json() );

app.use('/', require('./root'));

const ws = require('./websocket');
new ws(wss);

server.listen(3000, '0.0.0.0', () => console.log('listen 3000'));

