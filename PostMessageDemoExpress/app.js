var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const request = require("request");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = ["John", "Matt", "Deo", "Smith"];

app.get("/", (req, res) => res.render("home"));

app.get("/friends", (req, res) => {
    // var friends = ["John", "Matt", "Deo", "Smith"]
    res.render("friends", {friends: friends});
});

app.post("/addFriend", (req, res) => {
    console.log(req.body);
    friends.push(req.body.friend);
    // res.send("Friend added");
    res.redirect("friends");
});

app.listen(3000, () => console.log("NodeJS running .."));