import React, { useContext } from 'react'
import ContactContext from '../../context/contact/ContactContext'
import ContactItem from './ContactItem'

export const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts } = contactContext

    return (
        <div>
            {contacts.map(contact => (
                <ContactItem key={contact.id} contact={contact} />
            ))}
        </div>
    )
}

export default Contacts