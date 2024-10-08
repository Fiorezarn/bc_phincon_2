const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();
// const { middlewareProducts } = require("../middlewares/middlewareProducts");

router.get("/", (req, res) => {
  res.send("Succesfully get all products");
});

router.get("/read-file", (req, res) => {});
