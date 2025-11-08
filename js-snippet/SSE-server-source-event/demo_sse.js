// open two terminal :
// this file run =>  node demo_sse.js
// to run index.html =>  http-server
// enbale cors plugin of crome on index.html 
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/events') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Connection': 'keep-alive',
      'Cache-Control': 'no-store',
      'access-control-allow-origin': '*'
    });

    // Simulate generating events every 2 seconds
    setInterval(() => {
      const message = `New data: ${Math.random()}`;
      res.write(`data: ${message}\n\n`);
    }, 2000);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});