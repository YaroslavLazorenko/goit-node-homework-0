const User = require("../../models/user");

const updateToken = async (id, token) => {
  return await User.findByIdAndUpdate(id, { token }); // updateOne
};

module.exports = updateToken;
