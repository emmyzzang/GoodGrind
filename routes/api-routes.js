var express = require("express");
var router = express.Router();

var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/data", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Data.findAll({}).then(function(data) {
      // We have access to the todos as an argument inside of the callback function
      res.json(data);
    });
  });
}