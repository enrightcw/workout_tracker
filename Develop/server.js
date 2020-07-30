const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethods", { useNewUrlParser: true, useUnifiedTopology: true });


const Workout = require("./models/workout");

const databaseUrl = "workoutTracker";
const collections = ["workouts"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.send(path.join(__dirname + "/public/index.html"));
});

app.get("/exercise", (req, res) => {
  res.send(path.join(__dirname + "/public/exercise.html"));
});

// app.get("/stats", (req, res) => {
//   res.send(path.join(__dirname + "./public/stats.html"));
// });

// app.get("/workout", (req, res) => {
//   res.send(path.join(__dirname + "./public/workout.html"));
// });

// Route to post our form submission to mongoDB via mongoose
app.post("/submit", ({body}, res) => {
    const workout = new Workout(body);

  Workout.create(workout)
    .then(dbTracker => {
      // If saved successfully, send the the new User document to the client
      res.json(dbTracker);
    })
    .catch(err => {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});
// Listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
