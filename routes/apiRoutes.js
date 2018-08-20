var db = require("../models");
var Moment = require("moment");
var moment = Moment();

module.exports = function(app) {
  // Getting current date
  var now = moment.format("L");
  // Get all bets
  app.get("/api/bets", function(req, res) {
    db.Bets.findAll({}).then(function(dbBets) {
      res.json(dbBets);
    });
  });
  // Get all current bets
  app.get("/api/bets/current", function(req, res) {
    db.Bets.findAll({
      where: {
        end_date: {$gte: now}
      }
    }).then(function (dbBets) {
      res.json(dbBets);
    });
  });
  // Get all past bets
  app.get("/api/bets/past", function(req, res) {
    db.Bets.findAll({
      where: {
        end_date: {$lt: now},
        is_paid: true
      }
    }).then(function(dbBets) {
      res.json(dbBets);
    });
  });
  // Get all outstanding bets
  app.get("/api/bets/outstanding", function(req,res) {
    db.Bets.findAll({
      where: {
        end_date: {$lt: now},
        is_paid: false
      }
    }).then(function(dbBets) {
      res.json(dbBets);
    });
  });
  // Get all bets for user
  app.get("/api/bets/:user", function(req, res) {
    var user = req.params.user;
    db.Bets.findAll({
      where: {
        $or: [{
          over_win: user
        },
        {
          under_lose: user
        }]
      }     
    }).then(function(dbBets) {
      res.json(dbBets);
    });
  });
  // Get all current bets for user
  app.get("/api/bets/current/:user", function(req, res) {
    var user = req.params.user;
    db.Bets.findAll({
      where: {
        $and: {
          end_date: {$gte: now},
          $or: [{
            over_win: user
          },
          {
            under_lose: user
          }]
        }
      }     
    }).then(function(dbBets) {
      res.json(dbBets)
    });
  });
  // Get all past bets for user
  app.get("/api/bets/past/:user", function(req, res) {
    var user = req.params.user;
    db.Bets.findAll({
      where: {
        $and: {
          end_date: {$lt: now},
          is_paid: true,
          $or: [{
            over_win: user
          },
          {
            under_lose: user
          }]
        }
      }     
    }).then(function(dbBets) {
      res.json(dbBets);
    });
  });
  // Get all outstanding bets for user
  app.get("/api/bets/outstanding/:user", function(req,res) {
    var user = req.params.user;
    db.Bets.findAll({
      where: {
        $and: {
          end_date: {$lt: now},
          is_paid: false,
          $or: [{
            over_win: user
          },
          {
            under_lose: user
          }]
        }
      }
    }).then(function(dbBets) {
      res.json(dbBets);
    });
  });
  // Get bet for ID
  app.get("/api/bets/id/:id", function(req,res) {
    var id = parseInt(req.params.id);
    db.Bets.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbBets) {
      res.json(dbBets);
    });
  });
  // Create a new bet
  app.post("/api/bets", function(req, res) {
    // db.Example.create(req.body).then(function(dbExample) {
    //   res.json(dbExample);
    // });
    console.log(req.body);
    db.Bets.create({
      over_win: req.body.firstbetter,
      under_lose: req.body.secondbetter,
      event: req.body.thebet,
      amount: req.body.amount,
      end_date: req.body.enddate
    }).then(function(dbBets) {
      res.json(dbBets)
    });
  });
  // Update is_paid for bet
  app.put("/api/bets", function(req,res) {
    db.Bets.update(req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function(dbBets) {
      res.json(dbBets);
    });
  });
  // Getting all users
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function (dbUsers) {
      res.json(dbUsers);
    })
  })
  app.post("/api/users", function(req, res) {
    db.Users.create({
      first_name: req.body.firstname,
      last_name: req.body.lastname,
      email: req.body.email
    });
  })

  // Delete an example by id
  app.delete("/api/bets/:id", function(req, res) {
    db.Bets.destroy({ where: { id: req.params.id } }).then(function(dbBets) {
      res.json(dbBets);
    });
  });
};