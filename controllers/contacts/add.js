const { addContact } = require("../../repository/contacts");

const add = async (req, res, next) => {
  const { name, email, phone } = req.body;
  const result = await addContact(name, email, phone);
  res.status(201).json({ status: "success", code: 201, data: { result } });
};

module.exports = add;
