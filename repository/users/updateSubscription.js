const User = require("../../models/user");

const updateSubscription = async (_id, subscription) => {
  return await User.findByIdAndUpdate(_id, { subscription }, { new: true });
};

module.exports = updateSubscription;
