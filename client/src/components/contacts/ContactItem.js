import React, { useContext } from 'react'
import ContactContext from '../../context/contact/ContactContext'

const ContactItem = ({ contact }) => {
    const { id, name, email, phone, type } = contact
    const contactContext = useContext(ContactContext)
    const { deleteContact, setCurrentContact, clearCurrentContact } = contactContext;

    const onDelete = () => {
        clearCurrentContact()
        deleteContact(id)
    }

    return (
        <div className="card bg-light">
            <h3 className='text-primary text-left'>
                {name}{' '}<span style={{ float: 'right' }} className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}</span>
            </h3>
            <ul className="list">
                {email && (
                    <li>
                        <i className='fas fa-envelope-open' /> {email}
                    </li>
                )}
                {phone && (
                    <li>
                        <i className='fas fa-phone ' /> {phone}
                    </li>
                )}
            </ul>
            <p>
                <button className='btn btn-dark btn-sm' onClick={() => { setCurrentContact(contact) }}>Edit</button>
                <button onClick={onDelete} className='btn btn-danger btn-sm'>Delete</button>
            </p>

        </div>
    )
}

export default ContactItem
