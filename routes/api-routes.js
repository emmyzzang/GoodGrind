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
    res.send({ hi: 'You are authenticated!!!'});
  });

  router.post('/signin', requireSignin, Authentication.signin);
  router.post('/signup', Authentication.signup);
  //////////////////////////////////////////////////////////////



  // GET route for getting all of the todos
  // THIS IS ONLY RETREIVING FEELINGS FOR STATS - NOT INSERTING - (we use the post route for that)
  ///////////////////////////////////////////
  router.get('/api/feelings', function(req, res) {

    console.log('[GET] /api/feelings');
    var email = req.query.email; // the query is a parameter that you pass into an http request
    console.log('[GET] /api/feelings - email: ' + email);

    // The backend server is responsible for connecting to the db to retreive user-specific feelings
    db.user.findOne({
      where: {email: email},
      include: [
        {
          model: db.feeling
        }
      ]
    }).then(function(data) {
        console.log('[GET] /api/feelings - Feelings found from DB:' + data.feelings);
        res.json(data.feelings);
    });
  });

  router.get('/api/reasons', function(req, res) {
    console.log('[GET] /api/reasons');
    var email = req.query.email;
    var feeling = req.query.feeling; // Pass 1 0 -1
    console.log('[GET] /api/reasons - email:' + email);

    db.user.findOne({
      where: {email},
      include: [
        {
          where: {feeling: feeling},
          model: db.feeling,
          include: [
            {
              model: db.reason
            }
          ]
        }
      ]
    }).then(user => {
        console.log('[GET] /api/reasons - Results: ' + JSON.stringify(user));

        // Mapping Example:
        // const feelings = user.feelings.map(feeling => {
        //   return Object.assign(
        //     {},
        //     {
        //       reason: feeling.reason
        //     }
        //     )
        // });

        /*
        [
            {x: "New Opportunities", y: 1},
            {x: "meh", y: 2},
            {x: "Boss", y: 3},
            {x: "Test", y: 2},
            {x: "Incoming", y: 1}
        ]
        */

        const reasons = [];

        user.feelings.map(feeling=> {
          // construct reasons from result set.

          if(feeling.reason){
            reasons.push(feeling.reason.reasonList);
          }

          return;
        });

        var result = count(reasons);
        console.log('[GET] /api/reasons - Formatted Result: ' + JSON.stringify(result));
        res.json(result)
    });
  });

// TODO - Figure out precisely how this works on the frontend

router.get('/api/goals', function(req, res) {
  var email = req.query.email;
  db.user.findOne({where: {email: email}}).then(function(data) {
    // Db request using sequelize to get user id. The user id is passed to find feelings for a specific user.
    var userId = data.id;
    db.goal.findAll({where: {userId: userId}}).then(function(data) {
      console.log('Goals found from DB:' + data);
      res.json(data);
    });
  });
})

// Post Routes
////////////////////////////////////////////

  router.post('/api/feelings', function (req, res, next) {
    console.log(req.body.email);
    // console.log(res)
    var email = req.body.email;
    var feeling = req.body.feeling;
    // db.feeling.create is what inserts feeling into db
    db.user.findOne({where: {email: email}}).then(function(data) {
      db.feeling.create({
        feeling: feeling,
        userId: data.id
      }).then(function(dbfeelings) {
        res.json(dbfeelings);
      });
    });
 });

 router.post('/api/reasons', function (req, res, next) {
   db.reason.create({
     reasonList: req.body.reasonList,
     feelingId: req.body.feelingId
   }).then(function(dbreasons) {
     res.json(dbreasons);
   });
});

router.post('/api/goals', function (req, res, next) {
   console.log(req.body)
   var email = req.body.email;
   // db.feeling.create is what inserts feeling into db
   db.user.findOne({where: {email: email}}).then(function(data) {
     db.goal.create({
       goal: req.body.goal,
       userId: data.id
     }).then(function(dbgoals) {
       res.json(dbgoals);
       console.log(dbgoals + 'this is a post response')
   });
  })
})

  // router.put('/api/data', function(req, res) {
  //   console.log('PUT just happened');
  //   res.json('put just happened - this is where results of the db will be');
  // });

  router.delete('/api/goals', function(req, res, next) {
    var email = req.query.email;
    // console.log(req)
    // db.feeling.create is what inserts feeling into db
    db.user.findOne({where: {email: email}}).then(function(data) {
      db.goal.destroy({
        where: {
          goal: req.query.goal,
          userId: data.id
        }
      })
      console.log("Item has been deleted")
  });
})

// Used to count occurences for [GET] - /api/reasons
function count(arr) {
    var a = [], b = [], prev;
    var result = [];


    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }

    for ( var j = 0; j < a.length; j++ ) {
        var jsonObject = {};
        var fieldName = a[j];
        var occurences = b[j];

        jsonObject = {
          x: fieldName,
          y: occurences
        }
        result.push(jsonObject);
    }
    // var containerArray = [];
    // containerArray.push(result);

    return result;
}



module.exports = router
