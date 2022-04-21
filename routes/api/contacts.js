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
} = require("../../schemas/contacts");
const { validateBody, ctrlWrapper, guard } = require("../../middlewares");

const router = express.Router();

router.get("/", guard, ctrlWrapper(getAll));

router.get("/:contactId", guard, ctrlWrapper(getById));

router.post("/", guard, validateBody(addContactSchema), ctrlWrapper(add));

router.delete("/:contactId", guard, ctrlWrapper(removeById));

router.put(
  "/:contactId",
  guard,
  validateBody(updateContactSchema),
  ctrlWrapper(updateById)
);

router.patch(
  "/:contactId/favorite",
  guard,
  validateBody(updateStatusSchema),
  ctrlWrapper(updateStatusContact)
);

module.exports = router;
