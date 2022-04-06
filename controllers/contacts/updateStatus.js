const { updateStatus } = require("../../repository/contacts");

const updateStatusContact = async (req, res, next) => {
  const result = await updateStatus(req.params.contactId, req.body);
  if (!result)
    return res
      .status(404)
      .json({ status: "error", code: 404, message: "Not found" });
  res.json({ status: "success", code: 200, data: { result } });
};

module.exports = updateStatusContact;
