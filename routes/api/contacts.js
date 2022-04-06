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
const { validateBody } = require("../../middlewares");

const router = express.Router();

router.get("/", getAll);

router.get("/:contactId", getById);

router.post("/", validateBody(addContactSchema), add);

router.delete("/:contactId", removeById);

router.put("/:contactId", validateBody(updateContactSchema), updateById);

router.patch(
  "/:contactId/favorite",
  validateBody(updateStatusSchema),
  updateStatusContact
);

module.exports = router;
