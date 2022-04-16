const express = require("express");
const { signup, login, logout } = require("../../controllers/auth");
const { ctrlWrapper } = require("../../middlewares");

const router = express.Router();

router.post("/signup", ctrlWrapper(signup));
router.post("/login", ctrlWrapper(login));
router.post("/logout", ctrlWrapper(logout));

module.exports = router;
