const Joi = require("joi");
const { User } = require("@/models");

const bodyvalidation = (req, res, next) => {
  const schema = Joi.object({
    fullname: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    phoneNumber: Joi.string().required(),
  });
  const validationError = schema.validate(req.body).error;
  if (validationError) {
    return res
      .status(400)
      .send({ status: "failed", code: 400, message: validationError.details });
  }
  next();
};

const checkDuplicates = async (req, res, next) => {
  const { username, email } = req.body;

  try {
    const user = await User.findOne({ where: { us_username: username } });
    if (user) {
      return res.status(400).send({
        status: "failed",
        code: 400,
        message: "Username already exists",
      });
    }

    const userEmail = await User.findOne({ where: { us_email: email } });
    if (userEmail) {
      return res
        .status(400)
        .send({ status: "failed", code: 400, message: "Email already exists" });
    }
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ status: "error", message: "Internal server error" });
  }
};

module.exports = { bodyvalidation, checkDuplicates };
