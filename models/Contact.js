const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true,
    },
    phone: {
        type: 'string',

    },
    type: {
        type: 'string',
        default: 'personal'
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('contact', ContactSchema)