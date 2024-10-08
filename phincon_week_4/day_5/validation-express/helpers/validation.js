const Joi = require("joi");

const validateUsers = (req) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    phoneNumber: Joi.string().required(),
  });
  const validationError = schema.validate(req.body).error;
  return validationError;
};

module.exports = { validateUsers };
