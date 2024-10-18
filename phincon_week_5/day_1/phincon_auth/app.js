require("dotenv").config();
require("module-alias/register");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 3000;

const authRoutes = require("@/routes/auth");

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
