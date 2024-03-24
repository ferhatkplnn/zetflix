const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const checkAuth = require("../middleware");
const { prisma } = require("../db");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

const validateUserData = [
  check("email", "Please input a valid email").isEmail(),
  check("password", "Please input a password with a min length of 6").isLength({
    min: 6,
  }),
  check("username", "Please input a username with a min length of 6").isLength({
    min: 6,
  }),
];

const createUser = async (userData) => {
  const { email, password, username } = userData;

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    throw new Error("This user already exists.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: { email, username, password: hashedPassword },
    select: { id: true, username: true, email: true },
  });

  return newUser;
};

const generateJWT = (user) => {
  const token = JWT.sign({ id: user.id, email: user.email, username: user.username }, process.env.JWT_SECRET, {
    expiresIn: 3600000,
  });

  return token;
};

router.post("/signup", validateUserData, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  try {
    const newUser = await createUser(req.body);

    const token = generateJWT(newUser);

    res.json({ user: newUser, token });
  } catch (error) {
    res.status(400).json({ errors: [{ msg: error.message }] });
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(400).json({ erros: [{ msg: "Invalid  credentials" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid  credentials" }] });
    }

    const token = generateJWT(user);

    const userPayload = {
      id: user.id,
      email: user.email,
      username: user.username,
    };

    res.json({
      user: userPayload,
      token,
    });
  } catch (error) {
    return next(error);
  }
});

router.get("/me", checkAuth, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
      select: { id: true, email: true, username: true },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json(user);
  } catch (error) {
    console.error("Error in /me endpoint:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
