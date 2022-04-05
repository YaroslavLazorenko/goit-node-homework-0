const Contact = require("../../models/contacts");

async function addContact(name, email, phone) {
  const contact = await Contact.create({ name, email, phone });
  return contact;
}

module.exports = addContact;
