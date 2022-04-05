const { removeContact } = require("../../repository/contacts");

const removeById = async (req, res, next) => {
  const result = await removeContact(req.params.contactId);
  if (result)
    return res.json({
      status: "success",
      code: 200,
      message: "Contact deleted",
    });
  return res
    .status(404)
    .json({ status: "error", code: 404, message: "Not found" });
};

module.exports = removeById;
