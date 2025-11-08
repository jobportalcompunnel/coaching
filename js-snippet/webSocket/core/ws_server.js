// run node core/web_server.js
const WebSocket = require('ws');
const http = require('http'); // Import http for proper header handling

const port = 8089;

const server = http.createServer((req, res) => {
  res.writeHead(200); // Handle unexpected requests (optional)
  res.end();
});

const wss = new WebSocket.Server({ server }); // Attach WebSocket server to http server

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

  ws.on('error', function(error) {
    console.error('WebSocket error:', error);
  });
});

server.listen(port, function() {
  console.log('WebSocket server listening on port', port);
});