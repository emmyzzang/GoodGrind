// *** Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
// const routes = require("./routes");

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
app.use(express.static("client/build"));

// Routes
// =============================================================
const routes = require('./routes/index.js');
app.use(routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
