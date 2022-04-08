const Joi = require("joi");

const updateStatusSchema = Joi.object({
  favorite: Joi.boolean(),
})
  .required()
  .min(1)
  .messages({
    "object.min": "Missing field favorite",
  });

module.exports = updateStatusSchema;
