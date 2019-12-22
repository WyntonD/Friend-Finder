var friends = require("../data/friends");

module.exports = function(app) {
  // Return all friends found in friends.js as JSON
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);

    // Receive user details (name, photo, scores)
    var user = req.body;

    // parseInt for scores
    for(var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    // default friend match is the first friend but result will be whoever has the minimum difference in scores
    var bestFriendIndex = 0;
    var minimumDifference = 40;

    // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
    //  whatever the difference is, add to the total difference
    for(var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }

      // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
      if(totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
      }
    }

    // after finding match, add user to friend array
    friends.push(user);

    // send back to browser the best friend match
    res.json(friends[bestFriendIndex]);
  });
};

// var path = require("path");

// var friends = require ("../data/friends");

// module.exports = function(app) {

//     app.get("/", function(req, res) {
//         res.sendFile(path.join(__dirname, "/app/public/home.html")
//     )},
    
//     app.get("/home.html", function(req, res) {
//         res.sendFile(path.join(__dirname, "/app/public/home.html")
//     )},
    
    // app.get("/survey.html", function (req, res) {
    //     res.sendFile(path.join(__dirname, "/app/public/survey.html"))
    // }),

    // app.get("/api/friends", function (req, res) {
    //     res.json(friends);
    // }),

//     app.post("/api/friends", function (req, res) {
//         var userInput = req.body;

//         var userResponse = userInput.scores;

//         var friendName = "";
//         var friendImage = "";

//         var totalDifference = 100000;

//         for (var i = 0; i < friends.length; i++) {

//             var difference = 0;
//             for (var k = 0; j < userResponse.length; k++) {
//                 difference += Math.abs(friends[i].scores[k] - userResponse[k]);
//             }

//         if (difference < totalDifference) {
//             totalDifference = difference;
//             friendName = friends[i].name;
//             friendImage = friends[i].photo;
//         }
//         }

//         friends.push(userInput);

//         res.json({status: "OK", 
//         friendName: friendName,
//         friendImage: friendImage
//     })
// })
// )
// );
// };