const path = require("path");
const express = require("express");
const morgan = require("morgan");
var handlebars = require("express-handlebars");

const app = express();
const port = 4000;

// HTTP
app.use(morgan("combined"));
// Template engine
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources", "views"));
// console.log(path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/news", (req, res) => {
    res.render("news");
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
