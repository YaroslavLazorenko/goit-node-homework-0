const Contact = require("../../models/contact");

async function listContacts(req, res) {
  const { _id } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const { favorite } = req.query;

  const skip = (page - 1) * limit;
  let filter = null;
  if (favorite === "false" || favorite === "true") {
    const isFavoriteTrue = favorite === "true";
    filter = { favorite: isFavoriteTrue };
  }

  const contacts = await Contact.find({ owner: _id, ...filter }, "", {
    skip,
    limit: Number(limit),
  }).populate("owner", "_id email");

  return contacts;
}

module.exports = listContacts;
