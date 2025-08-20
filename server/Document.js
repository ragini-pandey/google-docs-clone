const { Schema, model } = require("mongoose");

const DocumentSchema = new Schema({
    _id: String,
    data: Object,
});

const Document = model("Document", DocumentSchema);

async function findOrCreateDocument(id) {
    if (!id) return null;
    const existingDocument = await Document.findById(id);
    if (existingDocument) return existingDocument;
    return Document.create({ _id: id, data: "" });
}

module.exports = { Document, findOrCreateDocument }
