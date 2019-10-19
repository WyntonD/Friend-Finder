var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8070;


app.listen(PORT, function() {
    console.log("Server listening on : http://localhost:" + PORT);
})

var people = {
    name:"Ahmed",
    photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores:[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  }
  