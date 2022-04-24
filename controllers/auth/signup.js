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

module.exports =  signup;