const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000; // Port number for localhost

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'index.html');

  fs.readFile('index.html', (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end(`Server Error: ${err}`);
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content, 'utf8');
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
