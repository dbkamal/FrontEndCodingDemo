const express = require("express");
const request = require("request");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/results", (req, res) => {
    // console.log(req.query.search);

    const searchString = req.query.search;
    const url = "http://www.omdbapi.com/?s=" + searchString + "&apikey=cdb6307c"

    request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const results = JSON.parse(response.body);
            // console.log(results);
            res.render("results", {results: results["Search"]});
        }
    });

});

app.get("/", (req, res) => {
    res.send("hello world!");
});


app.listen(3000, () => {
    console.log("Nodejs started..");
});