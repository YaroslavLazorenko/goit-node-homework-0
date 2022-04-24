const Joi = require("joi");

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").required(),
})
  .required()
  .min(1)
  .messages({
    "object.min": "Missing field subscription",
  });

module.exports = updateSubscriptionSchema;
