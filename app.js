const express = require("express");
const port = 3000;
const path = require("path");
const app = express();
const bodyparser = require("body-parser");

// EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static")); // For serving static files
app.use(express.urlencoded());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  const params = {};
  res.status(200).render("home.pug", params);
});

app.get("/Community", (req, res) => {
  const params = {};
  res.status(200).render("community.pug", params);
});

app.get("/Login", (req, res) => {
  const params = {};
  res.status(200).render("login.pug", params);
});
app.get("/Sign", (req, res) => {
  const params = {};
  res.status(200).render("sign.pug", params);
});
app.get("/Services", (req, res) => {
  const params = {};
  res.status(200).render("services.pug", params);
});
app.get("/Food", (req, res) => {
  const params = {};
  res.status(200).render("Food_Security.pug", params);
});

// START THE SERVER
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
