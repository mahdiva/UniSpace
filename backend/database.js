async function main() {
  const express = require("express");
  const app = express();
  const PORT = 8000;

  require("dotenv").config();
  const mongoose = require("mongoose");
  const uri = process.env.MONGODB_URI;

  // Connect to the MongoDB
  await mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to the database...");
    })
    .catch(() => {
      console.log("Failed to connect to the database...");
      console.log(err);
    });

  // Creata a school schema
  const shcoolSchema = new mongoose.Schema({
    schoolName: String,
  });

  // Create
  const School = mongoose.model("school", shcoolSchema);

  // Find a table
  await School.find({}).then((data) => console.log(data));

  app.get("/", (req, res) => {
    res.send("<h1>UniSpace!</h1>");
    console.log("Get Request: /");
  });

  app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
  });
}
main();
