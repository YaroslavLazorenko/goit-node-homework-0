const express = require("express");
const {
  signup,
  login,
  logout,
  current,
  updateSubscription,
} = require("../../controllers/auth");
const { authSchema, updateSubscriptionSchema } = require("../../schemas/users");
const { ctrlWrapper, validateBody, guard } = require("../../middlewares");

const router = express.Router();

router.post("/signup", validateBody(authSchema), ctrlWrapper(signup));
router.post("/login", validateBody(authSchema), ctrlWrapper(login));
router.get("/logout", guard, ctrlWrapper(logout));
router.get("/current", guard, ctrlWrapper(current));
router.patch(
  "/",
  guard,
  validateBody(updateSubscriptionSchema),
  ctrlWrapper(updateSubscription)
);

module.exports = router;
