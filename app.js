const express = require("express");
const { range } = require("express/lib/request");
const port = 5000;
const app = express();
const arr = require("create-arr");

const pug = require("pug");

app.set("view engine", "pug");

var date = new Date();
var time = date.toUTCString().split(" ");
var day = (time[0] = !"Sat" || "Sun" ? (day = true) : (day = false));
var hours =
  time[4] == arr.r(9, 17).toString() ? (hours = true) : (hours = false);
if (day && hours === true) {
  app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
  });
  app.get("/contact", (req, res) => {
    res.render("Contact", { title: "Contact" });
  });
  app.get("/services", (req, res) => {
    res.render("Services", { title: "Services" });
  });
} else {
  app.get("/", (req, res) => {
    res.send("Time Is Up");
  });
}

app.listen(port, (err) => {
  if (err) return console.error(err);
  else console.log(`server is on port ${port}`);
});
