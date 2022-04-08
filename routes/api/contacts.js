const express = require("express");
const {
  getAll,
  getById,
  add,
  updateById,
  removeById,
  updateStatusContact,
} = require("../../controllers/contacts");
const {
  addContactSchema,
  updateContactSchema,
  updateStatusSchema,
} = require("../../schemas");
const { validateBody, ctrlWrapper } = require("../../middlewares");

const router = express.Router();

router.get("/", ctrlWrapper(getAll));

router.get("/:contactId", ctrlWrapper(getById));

router.post("/", validateBody(addContactSchema), ctrlWrapper(add));

router.delete("/:contactId", ctrlWrapper(removeById));

router.put(
  "/:contactId",
  validateBody(updateContactSchema),
  ctrlWrapper(updateById)
);

router.patch(
  "/:contactId/favorite",
  validateBody(updateStatusSchema),
  ctrlWrapper(updateStatusContact)
);

module.exports = router;
