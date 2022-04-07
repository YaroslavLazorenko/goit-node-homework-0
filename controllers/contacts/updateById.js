const { updateContact } = require("../../repository/contacts");
const {
  HTTP_STATUS_CODE,
  HTTP_STATUS,
  HTTP_MESSAGE,
} = require("../../libs/consts");

const updateById = async (req, res, next) => {
  const result = await updateContact(req.params.contactId, req.body);
  if (!result)
    return res.status(HTTP_STATUS_CODE.NOT_FOUND).json({
      status: HTTP_STATUS.ERROR,
      code: HTTP_STATUS_CODE.NOT_FOUND,
      message: HTTP_MESSAGE.NOT_FOUND,
    });
  res.json({
    status: HTTP_STATUS.SUCCESS,
    code: HTTP_STATUS_CODE.OK,
    data: { result },
  });
};

module.exports = updateById;
