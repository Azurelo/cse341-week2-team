const Contact = require('../models/Contact');

// GET - Fetch All Contacts
exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch contacts", error: err.message });
    }
};

// GET - Fetch a Single Contact by ID
exports.getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.json(contact);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch contact", error: err.message });
    }
};

// POST - Create a New Contact
exports.createContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json(newContact);
    } catch (err) {
        res.status(400).json({ message: "Failed to create contact", error: err.message });
    }
};

// PUT - Update a Contact
exports.updateContact = async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedContact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.status(204).json(updatedContact);
    } catch (err) {
        res.status(400).json({ message: "Failed to update contact", error: err.message });
    }
};

// DELETE - Remove a Contact
exports.deleteContact = async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        if (!deletedContact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.status(200).json({ message: "Contact deleted successfully" });
    } catch (err) {
        res.status(400).json({ message: "Failed to delete contact", error: err.message });
    }
};
