const http = require("http");

const app = http.createServer((req, res) => {
  if (req.url === "/api/test") {
    res.end("test node");
  }
});

app.listen("9000", "localhost", () => {
  console.log("localhost 9000");
});
