const express = require("express");
const {
  getAll,
  getById,
  add,
  updateById,
  removeById,
} = require("../../controllers/contacts");
const { addContactSchema, updateContactSchema } = require("../../schemas");
const { validateBody } = require("../../middlewares");

const router = express.Router();

router.get("/", getAll);

router.get("/:contactId", getById);

router.post("/", validateBody(addContactSchema), add);

router.delete("/:contactId", removeById);

router.put("/:contactId", validateBody(updateContactSchema), updateById);

module.exports = router;
