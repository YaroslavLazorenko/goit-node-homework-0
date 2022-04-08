const { addContact } = require("../../repository/contacts");
const { HTTP_STATUS_CODE, HTTP_STATUS } = require("../../libs/consts");

const add = async (req, res, next) => {
  const { name, email, phone, favorite = false } = req.body;
  const result = await addContact(name, email, phone, favorite);
  res.status(HTTP_STATUS_CODE.CREATED).json({
    status: HTTP_STATUS.SUCCESS,
    code: HTTP_STATUS_CODE.CREATED,
    data: { result },
  });
};

module.exports = add;
