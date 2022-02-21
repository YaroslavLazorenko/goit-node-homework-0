const express = require("express");
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require("../../controllers/contacts");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const result = await listContacts();
  res.json({ status: "success", code: 200, data: { result } });
});

router.get("/:contactId", async (req, res, next) => {
  const contactId = req.params.contactId;
  const result = await getContactById(contactId);
  if (!result)
    return res.status(404).json({
      status: "error",
      code: 404,
      message: `Contact with id=${contactId} not found`,
    });
  res.json({ status: "success", code: 200, data: { result } });
});

router.post("/", async (req, res, next) => {
  const { name, email, phone } = req.body;
  const result = await addContact(name, email, phone);
  res.status(201).json({ status: "success", code: 201, data: { result } });
});

router.delete("/:contactId", async (req, res, next) => {
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
});

router.put("/:contactId", async (req, res, next) => {
  const result = await updateContact(req.params.contactId, req.body);
  if (!result)
    return res
      .status(404)
      .json({ status: "error", code: 404, message: "Not found" });
  res.json({ status: "success", code: 200, data: { result } });
});

module.exports = router;
