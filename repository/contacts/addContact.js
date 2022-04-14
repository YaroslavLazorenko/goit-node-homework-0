const Contact = require("../../models/contact");

async function addContact(name, email, phone, favorite) {
  const contact = await Contact.create({ name, email, phone, favorite});
  return contact;
}

module.exports = addContact;
