const router = require("express").Router();
const { prisma } = require("../db");
const checkAuth = require("../middleware");
const fetchSubscription = require("../utils/stripe");

router.get("/movies/list", checkAuth, async (req, res, next) => {
  try {
    const subscription = await fetchSubscription(req.user.email);

    if (!subscription) {
      return res.status(403).json({
        errors: [
          {
            msg: "Unauthorized; no plan",
          },
        ],
      });
    }

    const offset = Number(req.query?.offset);
    const count = await prisma.movie.count();
    const movies = await prisma.movie.findMany({
      take: 12,
      skip: offset,
    });
    return res.json({ movies, limit: count });
  } catch (error) {
    next(error);
  }
});

router.get("/movies/:id", checkAuth, async (req, res) => {
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
