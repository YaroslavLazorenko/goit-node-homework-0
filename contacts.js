const path = require("path");
const fs = require("fs/promises");
const { randomUUID } = require("crypto");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function getContacts() {
  const data = await fs.readFile(contactsPath);

  try {
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.warn(`\x1B[31m${error.message}`);
    return null;
  }
}

async function listContacts() {
  return await getContacts();
}

async function getContactById(contactId) {
  const contacts = await getContacts();
  if (!contacts) return null;

  const contact = contacts.find((contact) => contact.id === contactId);
  return contact ? contact : null;
}

async function removeContact(contactId) {
  const contacts = await getContacts();
  if (!contacts) return null;

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
  const contacts = await getContacts();
  if (!contacts) return null;

  const newContactItem = { name, email, phone, id: randomUUID() };
  const newContacts = [...contacts, newContactItem];
  await fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2));
  return newContactItem;
}

module.exports = { listContacts, getContactById, removeContact, addContact };
