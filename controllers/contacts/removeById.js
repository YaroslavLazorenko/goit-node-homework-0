const { removeContact } = require("../../repository/contacts");
const {
  HTTP_STATUS_CODE,
  HTTP_STATUS,
  HTTP_MESSAGE,
} = require("../../libs/consts");

const removeById = async (req, res, next) => {
  const result = await removeContact(req.params.contactId);
  if (result)
    return res.json({
      status: HTTP_STATUS.SUCCESS,
      code: HTTP_STATUS_CODE.OK,
      message: HTTP_MESSAGE.DELETED,
    });
  return res.status(HTTP_STATUS_CODE.NOT_FOUND).json({
    status: HTTP_STATUS.ERROR,
    code: HTTP_STATUS_CODE.NOT_FOUND,
    message: HTTP_MESSAGE.NOT_FOUND,
  });
};

module.exports = removeById;
