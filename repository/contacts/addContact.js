const Contact = require("../../models/contact");

async function addContact(name, email, phone, favorite, _id) {
  const contact = await Contact.create({
    name,
    email,
    phone,
    favorite,
    owner: _id,
  });
  return contact;
}

module.exports = addContact;
