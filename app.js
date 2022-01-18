const express = require("express");
const { range } = require("express/lib/request");
const port = 5000;
const app = express();
const arr = require("create-arr");

const pug = require("pug");

app.set("view engine", "pug");

var date = new Date();
var time = date.toUTCString().split(" ");
var array = arr.r(9, 9);
var day = time[0] !== "Sat" || "Sun" ? (day = true) : (day = false);
var hours = array.includes(Number(time[4].substring(0, 2)))
  ? (hours = true)
  : (hours = false);
console.log(hours);

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
  app.all("*", (req, res) => {
    res.send("Time Is Up");
  });
}

app.listen(port, (err) => {
  if (err) return console.error(err);
  else console.log(`server is on port ${port}`);
});
