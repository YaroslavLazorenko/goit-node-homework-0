const Contact = require("../../models/contacts");

async function addContact(name, email, phone, favorite) {
  const contact = await Contact.create({ name, email, phone, favorite});
  return contact;
}

module.exports = addContact;
