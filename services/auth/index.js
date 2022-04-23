const jwt = require("jsonwebtoken");
const Users = require("../../repository/users");
const { HTTP_STATUS_CODE, HTTP_MESSAGE } = require("../../libs/consts");
const { CustomError } = require("../../middlewares/customErrors");

const SECRET_KEY = process.env.JWT_SECRET_KEY;

class AuthService {
  async create(body) {
    const user = await Users.findByEmail(body.email);
    if (user) {
      throw new CustomError(HTTP_STATUS_CODE.CONFLICT, HTTP_MESSAGE.CONFLICT);
    }
    const newUser = await Users.create(body);

    return {
      email: newUser.email,
      subscription: newUser.subscription,
    };
  }

  async login({ email, password }) {
    const user = await this.getUser(email, password);
    if (!user) {
      throw new CustomError(
        HTTP_STATUS_CODE.UNAUTHORIZED,
        HTTP_MESSAGE.UNAUTHORIZED
      );
    }
    const token = this.generateToken(user);
    await Users.updateToken(user.id, token);
    return { email: user.email, subscription: user.subscription, token };
  }

  async updateSubscription({ _id }, { subscription }) {
    const result = await Users.updateSubscription(_id, subscription);
    return result;
  }

  async logout(id) {
    await Users.updateToken(id, null);
  }

  async getUser(email, password) {
    const user = await Users.findByEmail(email);

    if (!user) {
      return null;
    }

    if (!(await user?.isValidPassword(password))) {
      return null;
    }

    return user;
  }

  generateToken(user) {
    const payload = { id: user.id, email: user.email };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
    return token;
  }
}

module.exports = new AuthService();
