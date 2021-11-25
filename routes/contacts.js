const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator')
const auth = require('../middleware/auth')

const User = require('../models/User')
const Contact = require('../models/Contact')

// @route       GET /api/contacts
// @desc        Get users contacts
// @access      Private

router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 })
        res.send(contacts)
    } catch (error) {
        console.error(error.message)
        res.send('Server Error')
    }
})

// @route       POST /api/contacts
// @desc        Add a new contact to the contact list
// @access      Private

router.post('/', [auth, [check('name', 'Name is required').notEmpty()]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() })
    }

    try {
        const { name, email, phone, type } = req.body;

        let contact = new Contact({
            user: req.user.id,
            name,
            email,
            phone,
            type
        })
        contact = await contact.save()
        res.send(contact)

    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }


})

// @route       PUT /api/contacts/:id
// @desc        Update users contact
// @access      Private

router.put('/:id', auth, async (req, res) => {
    const { name, email, phone, type } = req.body;

    // Build contact field
    const contactField = {};
    if (name) contactField.name = name;
    if (email) contactField.email = email;
    if (phone) contactField.phone = phone;
    if (type) contactField.type = type;

    try {
        let contact = await Contact.findById(req.params.id)
        if (!contact) return res.status(404).send({ msg: 'Contact not found' })

        // Make sure user owns contact

        if (contact.user.toString() !== req.user.id) return res.status(401).send({ msg: 'Unauthorized' })

        contact = await Contact.findByIdAndUpdate(req.params.id, { $set: contactField }, { new: true })

        res.status(201).send(contact)
    } catch (error) {
        console.error(error.message)
        res.send(500).send('Server Error')
    }
})

// @route       DELETE /api/contacts/:id
// @desc        Delete users contact
// @access      Private

router.delete('/:id', auth, async (req, res) => {
    try {
        let contact = await Contact.findById(req.params.id)
        if (!contact) return res.status(404).send({ msg: 'Contact not found' })

        // Make sure user owns contact

        if (contact.user.toString() !== req.user.id) return res.status(401).send({ msg: 'Unauthorized' })

        await Contact.findByIdAndRemove(req.params.id)

        res.send({ msg: 'Contact deleted' })

    } catch (error) {
        console.error(error.message)
        res.send(500).send('Server Error')
    }
})

module.exports = router;
