var path = require("path");

var friends = require ("../data/friends");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/app/public/home.html")
    )},
    
    app.get("/home.html", function(req, res) {
        res.sendFile(path.join(__dirname, "/app/public/home.html")
    )},
    
    app.get("/survey.html", function (req, res) {
        res.sendFile(path.join(__dirname, "/app/public/survey.html"))
    }),

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    }),

    app.post("/api/friends", function (req, res) {
        var userInput = req.body;

        var userResponse = userInput.scores;

        var friendName = "";
        var friendImage = "";

        var totalDifference = 100000;

        for (var i = 0; i < friends.length; i++) {

            var difference =0;
            for (var k = 0; j < userResponse.length; k++) {
                difference += Math.abs(friends[i].scores[k] - userResponse[k]);
            }

        if (difference < totalDifference) {
            totalDifference = difference;
            friendName = friends[i].name;
            friendImage = friends[i].photo;
        }
        }

        friends.push(userInput);

        res.json({status: "OK", 
        friendName: friendName,
        friendImage: friendImage
    })
})
)
);
};