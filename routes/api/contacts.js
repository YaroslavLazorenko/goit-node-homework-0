const express = require("express");
const { listContacts } = require("../../controllers/contacts");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const contacts = await listContacts();
  console.table(contacts);
  res.json({ message: "Get contacts" });
});

router.get("/:contactId", async (req, res, next) => {
  res.json({ message: "Get contact by id" });
});

router.post("/", async (req, res, next) => {
  res.json({ message: "Post contact" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "Remove contact" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "Put contact" });
});

router.patch("/:contactId", async (req, res, next) => {
  res.json({ message: "Patch contact" });
});

module.exports = router;
