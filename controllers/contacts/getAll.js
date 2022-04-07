const { listContacts } = require("../../repository/contacts");
const { HTTP_STATUS_CODE, HTTP_STATUS } = require("../../libs/consts");

const getAll = async (req, res, next) => {
  const result = await listContacts();
  res.json({
    status: HTTP_STATUS.SUCCESS,
    code: HTTP_STATUS_CODE.NOT_FOUND,
    data: { result },
  });
};

module.exports = getAll;
