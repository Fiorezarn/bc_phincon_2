const express = require("express");
const router = express.Router();
// const { validateUsers } = require("../helpers/validation");
const { middlewareUsers } = require("../middlewares/middlewareUsers");

router.get("/", (req, res) => {
  res.send("Succesfully get all users");
});

router.get("/add", middlewareUsers, (req, res) => {
  const { name } = req.body;
  res.send(`Halo ${name}`);
});

module.exports = router;
