const DEFAULT_SERVER_PORT = 3000;

const HTTP_STATUS = {
  SUCCESS: "success",
  ERROR: "error",
};

const HTTP_MESSAGE = {
  NOT_FOUND: "Not found",
  DELETED: "Contact deleted",
};

const HTTP_STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

const SALT_ROUNDS = 10;

module.exports = {
  DEFAULT_SERVER_PORT,
  HTTP_STATUS,
  HTTP_STATUS_CODE,
  HTTP_MESSAGE,
  SALT_ROUNDS,
};
