const router = require("express").Router();
const { stripe } = require("../utils/stripe");
router.get("/products", async (req, res) => {
  const response = await stripe.products.list({ apiKey: process.env.STRIPE_SECRET });

  return res.json(response.data);
});

module.exports = router;
