import React, { useState } from 'react'

const ContactForm = () => {
    const [contact, setContact] = useState({
        name: '', email: '', phone: '', type: 'personal'
    })

    const { name, email, phone, type } = contact
    return (
        <form>
            <h2 className='text-primary'>Add contact </h2>
            <input type='text' placeholder="name" name='name' value={name} onChange={onChange}></input>
        </form>
    )
}

export default ContactForm