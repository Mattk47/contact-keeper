import React, { useState, useContext, useEffect } from 'react'
import ContactContext from '../../context/contact/ContactContext'

const ContactForm = () => {
    const [contact, setContact] = useState({
        name: '', email: '', phone: '', type: 'personal'
    })

    const contactContext = useContext(ContactContext)

    const { addContact, current, clearCurrentContact, updateContact } = contactContext

    const { name, email, phone, type } = contact

    useEffect(() => {
        if (current !== null) {
            setContact(current)
        } else {
            setContact({
                name: '', email: '', phone: '', type: 'personal'
            })
        }
    }, [contactContext, current])

    const onChange = e => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault()
        if (current === null) {
            addContact(contact)
        } else {
            updateContact(contact)
        }
        setContact({
            name: '', email: '', phone: '', type: 'personal'
        })
    }
    const clearAll = e => {
        clearCurrentContact()
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'>{current === null ? 'Add Contact' : 'Update Contact'}</h2>
            <input type='text'
                placeholder="Name"
                name='name' value={name}
                onChange={onChange}></input>
            <input type='email'
                placeholder="Email"
                name='email' value={email}
                onChange={onChange}></input>
            <input type='phone'
                placeholder="Phone"
                name='phone' value={phone}
                onChange={onChange}></input>
            <h5>Contact Type</h5>
            <input type='radio' name='type' value="personal" checked={type === 'personal'} onChange={onChange} />
            Personal{'  '}
            <input type='radio' name='type' value="professional" checked={type === 'professional'} onChange={onChange} />
            Professional{' '}
            <div>
                <input type='submit' value={current === null ? 'Add contact' : 'Update contact'} className='btn btn-primary' />
            </div>
            <div>
                {current && <div>
                    <button className='btn btn-light btn-block' onClick={clearAll}>Clear</button>
                </div>}
            </div>

        </form>
    )
}

export default ContactForm