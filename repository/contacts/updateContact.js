const Contact = require("../../models/contact");

async function updateContact(contactId, requestBody) {
  const updatedContact = await Contact.findOneAndUpdate(
    { _id: contactId },
    { ...requestBody },
    { new: true }
  );

  return updatedContact;
}

module.exports = updateContact;
