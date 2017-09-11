//Create the router for the app, and export the router at the end of your file.
var express = require("express");
var db = require("../models");

var router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", function(req, res) {
  console.log("accessing data via GET");
  db.hotdog.findAll({}).then(data => {
    var devoured = [];
    var available = [];

    data.forEach(function(element) {
      if (element.devoured) {
        devoured.push(element);
      } else {
        available.push(element);
      }
    });

    res.render("index", { available: available, devoured: devoured });
  });
});

router.put("/", function(req, res) {
  console.log(`accessing data via PUT with ${req.body.id}`);

  db.hotdog
    .update({ devoured: true }, { where: { id: req.body.id } })
    .then(result => {
      res.send(`Hotdog #${req.body.id} updated to devoured!`);
    })
    .catch(err => {
      res.send(err);
    });
});

router.post("/", function(req, res) {
  console.log(`accessing data via POST with ${req.body.name}`);

  db.hotdog
    .create({
      hotdog_name: req.body.name
    })
    .then(data => {
      res.send("Add finished");
    });
});

module.exports = router;
