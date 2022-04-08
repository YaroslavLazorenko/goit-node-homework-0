const Contact = require("../../models/contacts");

async function updateStatus(contactId, requestBody) {
  const { favorite } = requestBody;

  const updatedContact = await Contact.findOneAndUpdate(
    { _id: contactId },
    { favorite },
    { new: true }
  );

  return updatedContact;
}

module.exports = updateStatus;
