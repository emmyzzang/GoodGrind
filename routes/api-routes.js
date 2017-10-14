var express = require("express");
var router = express.Router();
var db = require("../models");

// AUTHENTICATION ////////////////////////////////////////////
const Authentication = require('../controllers/authentication');
const passportService = require('../services/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });
//////////////////////////////////////////////////////////////

// Routes
// =============================================================

  // AUTHENTICATION ////////////////////////////////////////////
  router.get('/test', requireAuth, function(req, res) {
    res.send({ hi: 'You are authenticated!!! :)'});
  });

  router.post('/signin', requireSignin, Authentication.signin);
  router.post('/signup', Authentication.signup);
  //////////////////////////////////////////////////////////////



  // GET route for getting all of the todos
  ///////////////////////////////////////////
  router.get('/api/feelings', function(req, res) {
    // findAll returns all entries for a table when used with no options
    console.log('GET happened!???');
    db.feelings.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  router.get('/api/reasons', function(req, res) {
    // findAll returns all entries for a table when used with no options
    console.log('GET happened!???');
    db.reasons.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  router.get('/api/todo', function(req, res) {
    // findAll returns all entries for a table when used with no options
    // console.log('GET happened!???');
    // db.reasons.findAll({}).then(function(data) {
    //   res.json(data);
    // });
  });

//Post Routes
////////////////////////////////////////////

  router.post('/api/feelings', function (req, res, next) {
    console.log(req);
    console.log(res)
    db.feelings.create({
      feeling: req.body.feeling
    }).then(function(dbfeelings) {
      res.json(dbfeelings);
    });
 });

 router.post('/api/reasons', function (req, res, next) {
   db.reasons.create({
     reasonList: req.body.reasonList
   }).then(function(dbreasons) {
     res.json(dbreasons);
   });
});

  router.post('/api/todo', function (req, res, next) {
    // db.reasons.create({
    //   reasonList: req.body.reasonList
    // }).then(function(dbreasons) {
    //   res.json(dbreasons);
    // });
  });

  // router.put('/api/data', function(req, res) {
  //   console.log('PUT just happened');
  //   res.json('put just happened - this is where results of the db will be');
  // });

  // router.delete('/api/data', function(req, res) {
  //   console.log('DELETE just happened');
  //   res.json('delete just happened - this can return a boolean of successful delete or not');
  // });

module.exports = router
