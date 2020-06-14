const express = require("express");
const app = express();
const http = require("http").Server(app);
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});
