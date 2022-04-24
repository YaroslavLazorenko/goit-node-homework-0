const DEFAULT_SERVER_PORT = 3000;

const HTTP_STATUS = {
  SUCCESS: "success",
  ERROR: "error",
};

const HTTP_MESSAGE = {
  NOT_FOUND: "Not found",
  DELETED: "Contact deleted",
  CONFLICT: "Email in use",
  UNAUTHORIZED: "Email or password is wrong",
};

const HTTP_STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

const SALT_ROUNDS = 10;

const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
};

module.exports = {
  DEFAULT_SERVER_PORT,
  HTTP_STATUS,
  HTTP_STATUS_CODE,
  HTTP_MESSAGE,
  SALT_ROUNDS,
  PAGINATION,
};
