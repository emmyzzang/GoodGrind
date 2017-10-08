// *** Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const axios = require("axios");
const routes = require("./routes/api-routes");

// Sets up the Express App
// =============================================================
let app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
let db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // was true
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("client/public"));

// Routes
// =============================================================
// require('./routes/api-routes.js')(app)

app.use("/", routes)

module.exports = app;

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
