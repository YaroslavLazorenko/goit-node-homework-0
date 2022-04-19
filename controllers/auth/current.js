const { HTTP_STATUS_CODE, HTTP_STATUS } = require("../../libs/consts");

const current = async (req, res) => {
  const { email, subscription } = req.user;
  return res.status(HTTP_STATUS_CODE.OK).json({
    status: HTTP_STATUS.SUCCESS,
    code: HTTP_STATUS_CODE.OK,
    data: {
      email,
      subscription,
    },
  });
};

module.exports = current ;