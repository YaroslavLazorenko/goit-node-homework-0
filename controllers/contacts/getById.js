const { getContactById } = require("../../repository/contacts");
const { HTTP_STATUS_CODE, HTTP_STATUS } = require("../../libs/consts");

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await getContactById(contactId);
  if (!result)
    return res.status(HTTP_STATUS_CODE.NOT_FOUND).json({
      status: HTTP_STATUS.ERROR,
      code: HTTP_STATUS_CODE.NOT_FOUND,
      message: `Contact with id=${contactId} not found`,
    });
  res.json({
    status: HTTP_STATUS.SUCCESS,
    code: HTTP_STATUS_CODE.OK,
    data: { result },
  });
};

module.exports = getById;
