const Contact = require("../../models/contact");

async function removeContact(contactId) {
  const deletedContact = await Contact.findOneAndRemove({ _id: contactId });
  return deletedContact;
}

module.exports = removeContact;
