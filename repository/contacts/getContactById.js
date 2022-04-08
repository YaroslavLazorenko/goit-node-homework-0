const Contact = require("../../models/contacts");

async function getContactById(contactId) {
  const contact = await Contact.findOne({ _id: contactId });
  return contact;
}

module.exports = getContactById;
