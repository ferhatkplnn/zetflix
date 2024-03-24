const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const bearerToken = req.headers.authorization;

  if (!bearerToken || !bearerToken.startsWith("Bearer ")) {
    return res.status(401).json({
      errors: [
        {
          msg: "Unauthorized",
        },
      ],
    });
  }

  const token = bearerToken.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      errors: [
        {
          msg: "Unauthorized",
        },
      ],
    });
  }

  const payload = JWT.verify(token, process.env.JWT_SECRET);

  if (!payload || !payload.email) {
    return res.status(401).json({
      errors: [
        {
          msg: "Unauthorized",
        },
      ],
    });
  }

  req.user = payload;
  next();
};
