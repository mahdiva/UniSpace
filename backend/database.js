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

  // Creata All schemas
  const userSchema = new mongoose.Schema({
    _id: Number,
    userName: String,
    userEmail: String,
    userCourses: String,
    userPreferences: String,
    userTimeCommitement: Number,
  });
  const shcoolSchema = new mongoose.Schema({
    _id: Number,
    schoolName: String,
  });
  const courseSchema = new mongoose.Schema({
    _id: Number,
    courseName: String,
    schoolID: Number,
  });
  const eventSchema = new mongoose.Schema({
    _id: Number,
    eventName: String,
    courseID: Number,
    eventType: String,
    eventDate: String,
  });
  const taskSchema = new mongoose.Schema({
    _id: Number,
    taskName: String,
    eventID: Number,
    taskDate: String,
    taskCompleted: Boolean,
    taskDependable: Number,
  });

  // Create ALL models
  const User = mongoose.model("User", shcoolSchema);
  const School = mongoose.model("School", shcoolSchema);
  const Course = mongoose.model("Course", shcoolSchema);
  const Event = mongoose.model("Event", shcoolSchema);
  const Task = mongoose.model("Task", shcoolSchema);

  // Add data to ALL models
  School.insertMany([
    { _id: 0, schoolName: "University of Calgary" },
    { _id: 1, schoolName: "University of Alberta" },
    { _id: 2, schoolName: "The University of British Columbia" },
    { _id: 3, schoolName: "University of Toronto" },
    { _id: 4, schoolName: "Coursera" },
  ]);
  Course.insertMany([
    { _id: 0, courseName: "DATA 305", schoolID: 0 },
    { _id: 1, courseName: "CPSC 355", schoolID: 0 },
    { _id: 2, courseName: "CPSC 359", schoolID: 0 },
    { _id: 3, courseName: "MGST 411", schoolID: 0 },
    { _id: 4, courseName: "Math of ML", schoolID: 4 },
  ]);
  Event.insertMany([
    {
      _id: 0,
      eventName: "Assignment 3",
      courseID: 0,
      eventType: "Assignment",
      eventDate: "",
    },
    {
      _id: 1,
      eventName: "Midterm 1",
      courseID: 0,
      eventType: "Exam",
      eventDate: "",
    },
    {
      _id: 2,
      eventName: "Quiz 1",
      courseID: 1,
      eventType: "Assignment",
      eventDate: "",
    },
    {
      _id: 3,
      eventName: "Quiz 2",
      courseID: 1,
      eventType: "Assignment",
      eventDate: "",
    },
    {
      _id: 4,
      eventName: "C Multithreading",
      courseID: 2,
      eventType: "Lecture",
      eventDate: "",
    },
    {
      _id: 5,
      eventName: "C OOP",
      courseID: 3,
      eventType: "Lecture",
      eventDate: "",
    },
    {
      _id: 6,
      eventName: "Matrix",
      courseID: 4,
      eventType: "Lecture",
      eventDate: "",
    },
    {
      _id: 7,
      eventName: "Matrix Problesm",
      courseID: 4,
      eventType: "Lab",
      eventDate: "",
    },
  ]);

  // Find ALL table
  await School.find({}).then((data) => console.log(data));
  await Course.find({}).then((data) => console.log(data));
  await Event.find({}).then((data) => console.log(data));
  await Task.find({}).then((data) => console.log(data));

  app.get("/", (req, res) => {
    res.send("<h1>UniSpace!</h1>");
    console.log("Get Request: /");
  });

  app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
  });
}
main();
