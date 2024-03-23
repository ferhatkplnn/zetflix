const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("", require("./routes/movies"));
app.use("/auth", require("./routes/auth"));
app.use("/sub", require("./routes/sub"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Somthing broke!");
});

app.use((req, res, next) => {
  res.status(404).json({ error: "Not found" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
