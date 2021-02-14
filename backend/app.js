async function main() {
  const express = require("express");
  const app = express();
  const PORT = 8000;

  app.get("/", (req, res) => {
    res.send("<h1>UniSpace!</h1>");
    console.log("Get Request: /");
  });

  app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
  });
}
main();
