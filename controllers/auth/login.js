const authService = require("../../services/auth");
const { HTTP_STATUS_CODE, HTTP_STATUS } = require("../../libs/consts");

const login = async (req, res) => {
  const { token, email, subscription } = await authService.login(req.body);
  return res.status(HTTP_STATUS_CODE.OK).json({
    status: HTTP_STATUS.SUCCESS,
    code: HTTP_STATUS_CODE.OK,
    data: {
      token,
      user: { email, subscription },
    },
  });
};

module.exports =login;