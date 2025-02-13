const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.url} New req received\n`;
  const myUrl = url.parse(req.url, true);

  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`Hi, I am ${username}`);
        break;
      case "/contact-us":
        res.end("contact me via mail");
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("Here are your results for " + search);
        break;
      default:
        res.end("404 Not Found");
        break;
    }
  });
});

myServer.listen(8000, () => console.log("Server Started!"));
