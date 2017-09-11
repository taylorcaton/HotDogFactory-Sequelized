var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var router = require("./controllers/hotdog_controllers.js");
var path = require("path");
var db = require("./models");


var app = express();
var port = process.env.PORT || 8080;

var exphbs = require("express-handlebars");

db.sequelize.sync().then(function() {
  app.listen(port, function() {
    // Serve static content for the app from the "public" directory in the application directory.
    app.use(express.static("public"));
    app.use(methodOverride("_method"));

    // Parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));
    app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");

    app.use("/", router);
    console.log("HotDogApp listening on PORT " + port);
  });
});
