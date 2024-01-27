const http = require('http');
const https = require('https');

const websiteUrl = 'https://vexctyserver.web.app'; // Replace with the URL you want to check
const port = 3000;

const checkWebsiteHealth = () => {
  https.get(websiteUrl, (resp) => {
    const { statusCode } = resp;

    if (statusCode === 200) {
      console.log('Website is healthy. Starting the server...');

      // Start your Node.js server
      startServer();
    } else {
      console.error(`Website is not healthy. Status code: ${statusCode}`);
      // Optionally handle the case when the website is not healthy
    }
  }).on('error', (err) => {
    console.error(`Error checking website health: ${err.message}`);
    // Optionally handle the error when checking website health
  });
};

const startServer = () => {
  const server = http.createServer((req, res) => {
    // Your application logic here
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Connected');
  });

  // Start your Node.js server
  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
};

checkWebsiteHealth();