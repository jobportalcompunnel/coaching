// run http-server where index.html
const messageList = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

const ws = new WebSocket('ws://localhost:8089'); // Replace with your server's URL

ws.onopen = function() {
  console.log('WebSocket connection opened');
};

ws.onmessage = function(event) {
  const message = JSON.parse(event.data);
  const listItem = document.createElement('li');
  listItem.textContent = message['message'];
  messageList.appendChild(listItem);
};

ws.onerror = function(error) {
  console.error('WebSocket error:', error);
};

sendButton.addEventListener('click', function() {
  const message = messageInput.value;
  if (!message) {
    return;
  }
  ws.send(JSON.stringify({ message }));
  messageInput.value = '';
});