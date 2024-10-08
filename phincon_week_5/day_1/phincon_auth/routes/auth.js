const express = require("express");
const router = express.Router();
const { registerUser } = require("@/controllers/auth");
const {
  bodyvalidation,
  checkDuplicates,
} = require("@/controllers/validation/auth");
const { verifyEmail } = require("@/controllers/token");

router.post("/register", bodyvalidation, checkDuplicates, registerUser);
router.get("/verify-email", verifyEmail);
module.exports = router;
