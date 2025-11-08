const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

const clients = [];

wss.on('connection', function(ws) {
  clients.push(ws);

  ws.on('message', function(message) {
    const data = JSON.parse(message);
    clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(data));
      }
    });
  });

  ws.on('close', function() {
    clients.splice(clients.indexOf(ws), 1);
  });
});

console.log('WebSocket server listening on port 8080');