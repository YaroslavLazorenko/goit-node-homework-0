const authService = require("../../services/auth");
const { HTTP_STATUS_CODE, HTTP_STATUS } = require("../../libs/consts");

const signup = async (req, res) => {
  const user = await authService.create(req.body);
  return res.status(HTTP_STATUS_CODE.CREATED).json({
    status: HTTP_STATUS.SUCCESS,
    code: HTTP_STATUS_CODE.CREATED,
    data: { ...user },
  });
};

const login = async (req, res) => {
  const { token, email, subscription } = await authService.login(req.body);
  return res.status(HTTP_STATUS_CODE.OK).json({
    status: HTTP_STATUS.SUCCESS,
    code: HTTP_STATUS_CODE.OK,
    token,
    user: { email, subscription },
  });
};

const logout = async (req, res) => {};

module.exports = { signup, login, logout };
