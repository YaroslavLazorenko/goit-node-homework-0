const Contact=require("../../models/contacts")

async function removeContact(contactId) {
  const deletedContact = await Contact.findOneAndRemove({_id:contactId});
  return deletedContact;
}

module.exports = removeContact;
