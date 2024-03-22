const router = require("express").Router();
const { prisma } = require("../db");

router.get("/movies/list", async (req, res) => {
  const offset = Number(req.query?.offset);
  const count = await prisma.movie.count();
  const movies = await prisma.movie.findMany({
    take: 12,
    skip: offset,
  });
  return res.json({ movies, limit: count });
});

router.get("/movies/:id", async (req, res) => {
  try {
    const id = req.params?.id;

    const movie = await prisma.movie.findUnique({ where: { id: Number(id) } });

    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.json(movie);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
