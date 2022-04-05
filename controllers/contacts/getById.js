const { getContactById } = require("../../repository/contacts");

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await getContactById(contactId);
  if (!result)
    return res.status(404).json({
      status: "error",
      code: 404,
      message: `Contact with id=${contactId} not found`,
    });
  res.json({ status: "success", code: 200, data: { result } });
};

module.exports = getById;
