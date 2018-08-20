var db = require("../models");
var Moment = require("moment");
var moment = Moment();
var path = require("path");

module.exports = function(app) {
  // Getting current date
  var now = moment.format("L");
  // Load index page
  // Default current bets for all users
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../activity.html"));
    // db.Bets.findAll({
    //   where: {
    //     end_date: {$gte: now}
    //   }
    // }).then(function(dbExamples) {
    //   res.render("index", {
    //     msg: "Current All",
    //     examples: dbExamples
    //   });
    // });
  });
  // Past bets for all users
  app.get("/past", function(req, res) {
    db.Bets.findAll({
      where: {
        end_date: {$lt: now},
        is_paid: true
      }
    }).then(function(dbExamples) {
      res.render("index", {
        msg: "Past All",
        examples: dbExamples
      });
    });
  });
  // Outstanding bets for all users
  app.get("/outstanding", function(req,res) {
    db.Bets.findAll({
      where: {
        end_date: {$lt: now},
        is_paid: false
      }
    }).then(function(dbExamples) {
      res.render("index", {
        msg: "Outstanding All",
        examples: dbExamples
      });
    });
  });
  // Current bet for specific user
  app.get("/current/:user", function(req, res) {
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
    }).then(function(dbExamples) {
      res.render("index", {
        msg: "Current User",
        examples: dbExamples
      });
    });
  });
  // Past bet for specific user
  app.get("/past/:user", function(req, res) {
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
    }).then(function(dbExamples) {
      res.render("index", {
        msg: "Past User",
        examples: dbExamples
      });
    });
  });
  // Outstanding bet for specific user
  app.get("/outstanding/:user", function(req,res) {
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
    }).then(function(dbExamples) {
      res.render("index", {
        msg: "Outstanding User",
        examples: dbExamples
      });
    });
  });
  
  app.get("/createBet", function(req, res) {
  res.sendFile(path.join(__dirname, "../createBet.html"));
});

  app.get("/balance", function(req, res) {
  res.sendFile(path.join(__dirname, "../balance.html"));
});

app.get("/friends", function(req, res) {
  res.sendFile(path.join(__dirname, "../friends.html"));
});

app.get("/index", function(req, res) {
  res.sendFile(path.join(__dirname, "../index.html"));
});

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};