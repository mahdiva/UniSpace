async function main() {
  const express = require("express");
  const app = express();
  const PORT = 3000;

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

  // Creating a Schema
  const testSchema = new mongoose.Schema({
    name: String,
    beds: Number,
    first_review: Date,
  });

  /* Creata a new Schema
  const shcoolSchema = new mongoose.Schema({
      // schoolID: { type: int, unique: true }
      schoolName: string
  });

  const School = mongoose.model('School',shcoolSchema );
  const uOfC = new School({schoolName: 'University of Calgary'})
  */

  // Find a table
  const listingsAndReviews = mongoose.model("ListingsAndReview", testSchema);
  await listingsAndReviews.find({}).then((data) => console.log(data));

  app.get("/", (req, res) => {
    res.send("<h1>UniSpace!</h1>");
    console.log("Get Request: /");
  });

  app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
  });
}
main();
