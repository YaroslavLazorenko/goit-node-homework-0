const path = require("path");
const fs = require("fs/promises");
const { randomUUID } = require("crypto");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
}

async function getContactById(contactId) {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const contact = contacts.find((contact) => contact.id === contactId);
  return contact ? contact : null;
}

async function removeContact(contactId) {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const contactToDeleteIndex = contacts.findIndex(
    (contact) => contact.id === contactId
  );

  if (contactToDeleteIndex === -1) {
    return null;
  }

  const deletedContact = contacts.splice(contactToDeleteIndex, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return deletedContact;
}

async function addContact(name, email, phone) {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const newContactItem = { name, email, phone, id: randomUUID() };
  const newContacts = [...contacts, newContactItem];
  await fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2));
  return newContactItem;
}

module.exports = { listContacts, getContactById, removeContact, addContact };
