const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;

const pug = require("pug");
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/menu", (req, res) => {
  res.render("menu");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.use(function(req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
