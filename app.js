const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "text/html",
  });
  res.write("<h1>Home Page</h1>");

  // we can also directly write html or body in res.end() instead of res.write
  res.end();
});

server.listen(2000);
