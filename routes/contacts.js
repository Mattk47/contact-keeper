const express = require('express');

const router = express.Router();

// @route       GET /api/contacts
// @desc        Get users contacts
// @access      Private

router.get('/', (req, res) => res.send('Get logged in users contacts'))

// @route       POST /api/contacts
// @desc        Add a new contact to the contact list
// @access      Private

router.post('/', (req, res) => res.send('Add new user'))

// @route       PUT /api/contacts/:id
// @desc        Update users contact
// @access      Private

router.put('/:id', (req, res) => res.send('Update contact'))

// @route       DELETE /api/contacts/:id
// @desc        Delete users contact
// @access      Private

router.delete('/:id', (req, res) => res.send('delete contact'))

module.exports = router;
