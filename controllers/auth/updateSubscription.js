const authService = require("../../services/auth");
const {
  HTTP_STATUS_CODE,
  HTTP_STATUS,
  HTTP_MESSAGE,
} = require("../../libs/consts");

const updateSubscription = async (req, res) => {
  const result = await authService.updateSubscription(req.user, req.body);
  if (!result)
    return res.status(HTTP_STATUS_CODE.NOT_FOUND).json({
      status: HTTP_STATUS.ERROR,
      code: HTTP_STATUS_CODE.NOT_FOUND,
      message: HTTP_MESSAGE.NOT_FOUND,
    });
  res.json({
    status: HTTP_STATUS.SUCCESS,
    code: HTTP_STATUS_CODE.OK,
    data: { result },
  });
};

module.exports = updateSubscription;
