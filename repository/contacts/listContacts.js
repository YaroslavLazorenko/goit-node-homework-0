const Contact = require("../../models/contact");

async function listContacts() {
  return await Contact.find({});
}

module.exports = listContacts;
