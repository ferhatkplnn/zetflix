const express = require("express");
const cors = require("cors");
const movies = require("./movies.json");
const { prisma } = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/movies/list", async (req, res) => {
  const offset = Number(req.query?.offset);
  const count = await prisma.movie.count();
  const movies = await prisma.movie.findMany({
    take: 12,
    skip: offset,
  });
  return res.json({ movies, limit: count });
});

app.get("/movies/:id", async (req, res) => {
  const id = req.params?.id;

  const movie = await prisma.movie.findUnique({ where: { id: Number(id) } });

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
