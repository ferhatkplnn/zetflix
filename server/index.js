const express = require("express");
const cors = require("cors");
const movies = require("./movies.json");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/movies/list", (req, res) => {
  const offset = req.query?.offset;
  const slicedMovies = movies.slice(Number(offset) - 12, Number(offset));
  setTimeout(() => {
    return res.json({ movies: slicedMovies, limit: movies.length });
  }, 800);
});

app.get("/movies/:id", (req, res) => {
  const id = req.params?.id;
  const movie = movies.find((movie) => movie.id === Number(id));
  if (!movie) {
    return res.status(404).json({ error: "Movie not found" });
  }
  res.json(movie);
});

app.use((req, res, next) => {
  res.status(404).json({ error: "Not found" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
