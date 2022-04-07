const { HTTP_STATUS_CODE, HTTP_STATUS } = require("../libs/consts");

const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (err) {
    console.warn(err.details);
    return res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({
      status: HTTP_STATUS.ERROR,
      code: HTTP_STATUS_CODE.BAD_REQUEST,
      message: err.message,
    });
  }
};

module.exports = validateBody;
