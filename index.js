const { Command } = require("commander");
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./controllers/contacts");

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      if (contacts) {
        if (contacts.length === 0) {
          return console.log("There are no items in contacts database");
        }
        console.table(contacts);
      }
      break;

    case "get":
      const contactById = await getContactById(id);
      if (contactById) {
        console.table(contactById);
        return;
      }
      console.log("Contact with such id is not found");
      break;

    case "add":
      const addedContact = await addContact(name, email, phone);
      if (addedContact) {
        console.log("The next contact was added:");
        console.table(addedContact);
        return;
      }
      console.log("Contact was no added");
      break;

    case "remove":
      const removedContact = await removeContact(id);
      if (removedContact) {
        console.log("The next contact was deleted:");
        console.table(removedContact);
        return;
      }
      console.log("Contact with such id is not found");
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

(async () => await invokeAction(argv))();
