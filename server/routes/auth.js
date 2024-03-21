const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const { prisma } = require("../db");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

router.post(
  "/signup",
  [
    check("email", "Please input a valid email").isEmail(),
    check(
      "password",
      "Please input a password with a min length of 6"
    ).isLength({ min: 6 }),
    check(
      "username",
      "Please input a username with a min lenght of 6"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const { email, password, username } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "This user already exists." }] });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });

    const token = JWT.sign(newUser, process.env.JWT_SECRET, {
      expiresIn: 3600000,
    });

    res.json({
      user: newUser,
      token,
    });
  }
);

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ erros: [{ msg: "Invalid  credentials" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ erros: [{ msg: "Invalid  credentials" }] });
    }

    const userPayload = {
      id: user.id,
      email: user.email,
      username: user.username,
    };

    const token = JWT.sign(userPayload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({
      user: userPayload,
      token,
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
