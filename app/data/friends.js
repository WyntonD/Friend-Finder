var friends = [
  {  name:"Ahmed",
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
    
},

{  name:"Dan",
    photo:"https://yt3.ggpht.com/a/AGF-l78kP2CYLxTiARC7c5S92EhQvbFn4IHWMTxbww=s900-c-k-c0xffffffff-no-rj-mo",
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
    
},

{  name:"Peel",
    photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpghttps://post.healthline.com/wp-content/uploads/2019/07/Banana_Peel_1200x628-facebook.jpg",
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
    
},

{  name:"Jade",
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
    
},

{  name:"Travis",
    photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/1200px-Stick_Figure.svg.png",
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
];

module.exports = friends;

// $("#submit").on("click", function() {
//     event.preventDefault();
   
//     var valid = true;

//     if($("#name").val() === "" || $("$photo").val() === ""){
//         valid = false;
//     } else if ($("#q1").val() === "empty")
//     valid = false;

//     if(valid ===true) {
    
//     var newPerson= {
   
//     name: $("#name-enter").val(),
//     photo: $("photo-link").val(),
//     scores: [
//         $("#q1").val(),
//         $("#q2").val(),
//         $("#q3").val(),
//         $("#q4").val(),
//         $("#q5").val(),
//         $("#q6").val(),
//         $("#q7").val(),
//         $("#q8").val(),
//         $("#q9").val(),
//         $("#q10").val(),
//     ]
//     }
// }
//     console.log(person);
// });

// var currentURL = window.location.origin;

// $.post(currentURL + "/api/friends", newPerson, function(data) {
//     $("#friendFind").text(data.name);
//     $("friendPhoto").attr("src", data.photo);
//     $("#bestFriendModal").modal("toggle");
// });

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/home.html")
// )},

// app.get("/home.html", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/home.html")
// )},

// app.get("/survey.html", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/survey.html"))
// }),

// app.get("/api", function (req, res) {
//     res.json(people);
// }),

// app.get("/api/:people", function(req, res) {
// //    res.json(people);
// var chosen = req.params.people;

// if(chosen) {
//     console.log(chosen);

//     for (var i = 0; i < people.length; i++){
//         if(chosen ===people[i].name) {
//             res.json(people[i]);
//             return;
//         }
//     }
//     res.send("This person was not found");
// }
// else{
//     res.json(people);
// }

// app.post("api/new", function (req, res){
//     var newPerson = req.body;
//     newPerson.name = newPerson.name.replace(/\s+/g, "").toLowerCase();
//     console.log(newPerson);
//     people.push(newPerson);
//     res.json(newPerson);
// });
//     // var chosen = req.params.people;

// //    for (var i = 0; i < people.length; i++){
// //     if (chosen === people[i].name){
// //         res.json(people[i]);
// //         return;
// //     }
// //   res.send("This person is not in our database");
// //    }

// }))
// );

