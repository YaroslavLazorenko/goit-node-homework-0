const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const contactsRouter = require("./routes/api/contacts");
const authRouter = require("./routes/api/auth");
const { HTTP_STATUS_CODE, HTTP_MESSAGE } = require("./libs/consts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/users", authRouter);
app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res
    .status(HTTP_STATUS_CODE.NOT_FOUND)
    .json({ message: HTTP_MESSAGE.NOT_FOUND });
});

app.use((err, req, res, next) => {
  res
    .status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR)
    .json({ message: err.message });
});

module.exports = app;
