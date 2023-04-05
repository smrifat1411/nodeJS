const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  // Home Page
  if (url === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write("<h1>Home Page</h1>");
    res.end();
  } else if (url === "/contact") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write("<h1>Contact Page</h1>");
    res.end();
  }
  // About Page
  else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.write("<h1>Request Page Not Found</h1>");
    res.end();
  }
});

server.listen(2000);
