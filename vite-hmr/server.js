const http = require("http");
const WebSocket = require("ws");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const server = http.createServer((req, res) => {
  console.log("req", req.url);
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  if (pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fs.readFileSync("./index.html"));
  } else if (pathname.endsWith(".js")) {
    res.writeHead(200, { "Content-Type": "application/javascript" });
    res.end(fs.readFileSync("." + pathname));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
});

const wss = new WebSocket.Server({ server });

function broadcast(data) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
}

fs.watch(path.resolve(__dirname, "./main.js"), () => {
  broadcast(JSON.stringify({ type: "reload", path: "/main.js" }));
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
