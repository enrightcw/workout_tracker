var path = require("path");

module.exports = function(app) {
  // Used when"Continue Workout" or "new Workout" is clicked in index.html
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};


// app.get("/", (req, res) => {
//     res.send(path.join(__dirname + "/public/index.html"));
//   });
  
//   app.get("/exercise", (req, res) => {
//     res.send(path.join(__dirname + "/public/exercise.html"));
//   });
  

//   // app.get("/workout", (req, res) => {
//   //   res.send(path.join(__dirname + "./public/workout.html"));
//   // });
  
//   // Route to post our form submission to mongoDB via mongoose
//   app.post("/submit", ({body}, res) => {
//       const workout = new Workout(body);
  
//     Workout.create(workout)
//       .then(dbTracker => {
//         // If saved successfully, send the the new User document to the client
//         res.json(dbTracker);
//       })
//       .catch(err => {
//         // If an error occurs, send the error to the client
//         res.json(err);
//       });
//   });


