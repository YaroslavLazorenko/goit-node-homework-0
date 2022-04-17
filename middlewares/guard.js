const jwt = require("jsonwebtoken");
const Users = require("../repository/users");
const { HTTP_STATUS_CODE, HTTP_STATUS } = require("../libs/consts");
const SECRET_KEY = process.env.JWT_SECRET_KEY;

const guard = async (req, res, next) => {
  const token = req.get("Authorization")?.split(" ")[1];
  const isValid = verifyToken(token);

  if (!isValid) {
    return res.status(HTTP_STATUS_CODE.UNAUTHORIZED).send({
      status: HTTP_STATUS.ERROR,
      code: HTTP_STATUS_CODE.UNAUTHORIZED,
      message: "Not authorized",
    });
  }

  const payload = jwt.decode(token);
  const user = await Users.findById({ _id: payload.id });

  if (!user || user.token !== token) {
    return res.status(HTTP_STATUS_CODE.UNAUTHORIZED).send({
      status: HTTP_STATUS.ERROR,
      code: HTTP_STATUS_CODE.UNAUTHORIZED,
      message: "Not authorized",
    });
  }
  req.user = user;
  next();
};

const verifyToken = (token) => {
  try {
    const t = jwt.verify(token, SECRET_KEY);
    return !!t;
  } catch (error) {
    return false;
  }
};
module.exports = guard;
