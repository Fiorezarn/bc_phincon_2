require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require("./routes/users");

app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello Guys");
});

app.use("/users", userRoutes);
