const { HTTP_STATUS_CODE, HTTP_STATUS } = require("../libs/consts");

const ctrlWrapper = (ctrl) => {
  return async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      switch (error.name) {
        case "ValidationError":
          res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({
            status: HTTP_STATUS.ERROR,
            code: HTTP_STATUS_CODE.BAD_REQUEST,
            message: error.message,
          });
          break;
        case "AppError":
          res.status(error.statusCode).json({
            status: error.status,
            code: error.statusCode,
            message: error.message,
          });
          break;
        default:
          next(error);
          break;
      }
    }
  };
};

module.exports = ctrlWrapper;
