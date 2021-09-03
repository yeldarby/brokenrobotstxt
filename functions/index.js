var functions = require("firebase-functions");
var express = require("express");

var app = express();

app.all('**', function(req, res) {
    console.log(req.path);
    res.json({
        hello: "from index.js",
        path: req.path
    });
});

exports.allRoutes = functions.https.onRequest(app);
