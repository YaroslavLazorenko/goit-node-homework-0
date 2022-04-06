const { addContact } = require("../../repository/contacts");

const add = async (req, res, next) => {
  const { name, email, phone, favorite = false} = req.body;
  const result = await addContact(name, email, phone, favorite);
  res.status(201).json({ status: "success", code: 201, data: { result } });
};

module.exports = add;
