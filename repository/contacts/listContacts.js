const Contact = require("../../models/contacts");

async function listContacts() {
  return await Contact.find({});
}

module.exports = listContacts;
