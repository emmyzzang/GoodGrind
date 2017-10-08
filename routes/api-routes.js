var express = require("express");
var router = express.Router();
var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/data", function(req, res) {
    // findAll returns all entries for a table when used with no options
    console.log('GET happened!???');

    // db.Data.findAll({}).then(function(data) {
    //   // We have access to the todos as an argument inside of the callback function
    //   res.json(data);
    // });
  });

  app.post('/feelings', function (req, res) {
    console.log('POST just happened');

    db.feelings.create({
      date: req.body.date,
      feelins: req.body.feelings
    }).then(function(dbfeelings) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbfeelings);
    });
 });

  app.put('/api/data', function(req, res) {
    console.log('PUT just happened');
    res.json('put just happened - this is where results of the db will be');
  });

  app.delete('/api/data', function(req, res) {
    console.log('DELETE just happened');
    res.json('delete just happened - this can return a boolean of successful delete or not');
  });

}
