import React, { useContext } from 'react'
import ContactContext from '../../context/contact/ContactContext'
import ContactItem from './ContactItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


export const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts, filtered } = contactContext

    if (contacts.length === 0) return <h4>Please add a contact</h4>

    return (
        <div>
            <TransitionGroup>
                {filtered !== null ? filtered.map(contact => (
                    <CSSTransition key={contact._id} timeout={500} classNames='item' >
                        <ContactItem contact={contact} />
                    </CSSTransition>
                )) : contacts.map(contact => (
                    <CSSTransition key={contact._id} timeout={500} classNames='item' >
                        <ContactItem contact={contact} />
                    </CSSTransition>
                ))
                }

            </TransitionGroup>
        </div>
    )
}

export default Contacts