const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// connect to db
mongoose
  .connect(`mongodb://127.0.0.1/shop_db`)
  .then((result) => {
    console.log("connect to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log(`app running on http://localhost:3000`);
});
