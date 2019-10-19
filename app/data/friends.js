var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

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
    
};

app.get("/", function(req, res) {
    res.send("Hello World")
})

app.get("/people", function(req, res) {
   res.json(people);
    // var chosen = req.params.people;

//    for (var i = 0; i < people.length; i++){
//     if (chosen === people[i].name){
//         res.json(people[i]);
//         return;
//     }
//   res.send("This person is not in our database");
//    }

})

app.listen(3000);

var PORT = process.env.PORT || 8070;

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})


app.listen(PORT, function() {
    console.log("Server listening on : http://localhost:" + PORT);
})

