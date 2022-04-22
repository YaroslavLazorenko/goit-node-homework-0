const { listContacts } = require("../../repository/contacts");
const { HTTP_STATUS_CODE, HTTP_STATUS } = require("../../libs/consts");

const getAll = async (req, res, next) => {
  const result = await listContacts(req, res);
  res.json({
    status: HTTP_STATUS.SUCCESS,
    code: HTTP_STATUS_CODE.OK,
    data: { result },
  });
};

module.exports = getAll;
