//web sockets
-- 
const socket = new WebSocket("ws://your-server-address:port");
const socket = new WebSocket("ws://your-server-address:port", ["protocol1", "protocol2"]);
const socket = new WebSocket("ws://your-server-address:port");

socket.onopen = function(event) {
  console.log("WebSocket connection opened!");
  // Send a message to the server
  socket.send("Hello from the client!");
};

socket.onmessage = function(event) {
  console.log("Message received from server:", event.data);
  // Handle the received message
};
