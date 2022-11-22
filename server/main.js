const express = require("express");
const app = express();

const port = 8000;

app.get("/", (req, res) => {
  console.log("Client connected");

  res.setHeader("Content-Type", "text/event-stream");
  // res.setHeader("Content-Length", "0");
  res.setHeader("Access-Control-Allow-Origin", "*");

  // res.socket.setTimeout(0);

  const invalidId = setInterval(() => {
    const date = new Date().toLocaleString();

    res.write(`data: ${date}\n\n`);
  }, 60000);

  res.on("close", () => {
    console.log("Client closed connection");

    clearInterval(invalidId);

    res.end();
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
