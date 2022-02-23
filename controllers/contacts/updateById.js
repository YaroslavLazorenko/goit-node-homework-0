const { updateContact } = require("../../models/contacts");

const updateById = async (req, res, next) => {
  const result = await updateContact(req.params.contactId, req.body);
  if (!result)
    return res
      .status(404)
      .json({ status: "error", code: 404, message: "Not found" });
  res.json({ status: "success", code: 200, data: { result } });
};

module.exports = updateById;
