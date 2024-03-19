const express = require("express");
const cors = require("cors");
const movies = require("./movies.json");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.get("/movies/list", (req, res) => {
  return res.send(movies);
});

app.listen(8080, () => {
  console.log("Now listening on PORT 8080");
});
