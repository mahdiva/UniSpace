const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>UniSpace!</h1>");
  console.log("Get Request: /");
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
