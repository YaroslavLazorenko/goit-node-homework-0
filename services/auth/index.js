const Users = require("../../repository/users");
const { HTTP_STATUS_CODE } = require("../../libs/consts");
const { CustomError } = require("../../middlewares/customErrors");

class AuthService {
  async create(body) {
    const user = await Users.findByEmail(body.email);
    if (user) {
      throw new CustomError(HTTP_STATUS_CODE.CONFLICT, "User already exists");
    }
    const newUser = await Users.create(body);

    return {
      id: newUser.id,
      email: newUser.email,
      password: newUser.password,
    };
  }

  async login({ email, password }) {}

  async logout(id) {}
}

module.exports = new AuthService();
