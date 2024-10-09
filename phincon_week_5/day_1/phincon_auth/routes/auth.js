const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("@/controllers/auth");
const {
  bodyvalidation,
  checkDuplicates,
} = require("@/controllers/validation/auth");
const { verifyEmail } = require("@/controllers/token");

router.post("/register", bodyvalidation, checkDuplicates, registerUser);
router.post("/login", loginUser);
router.get("/verify-email", verifyEmail);
router.get("/check-cookies", (req, res) => {
  console.log(req.cookies.user);
  res.status(200).send({
    code: 200,
    message: "success",
    data: req.cookies.user,
  });
});
module.exports = router;
