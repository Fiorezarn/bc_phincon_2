require("dotenv").config();
require("module-alias/register");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

const authRoutes = require("@/routes/auth");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
