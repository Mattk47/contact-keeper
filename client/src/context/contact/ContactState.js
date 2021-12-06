import React, { useReducer } from 'react'
import uuid from 'uuid';
import ContactContext from './ContactContext'
import contactReducer from './contactReducer'
import {
    GET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_CONTACTS,
    CLEAR_FILTER,
    CONTACT_ERROR
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [{
            id: 1,
            name: 'Freddy Mercury',
            email: 'freddy@gmail.com',
            phone: '111-222-333',
            type: 'personal'
        }, {
            id: 2,
            name: 'Jamaal Akhtar',
            email: 'jameel@gmail.com',
            phone: '333-444-555',
            type: 'professional'
        }, {
            id: 3,
            name: 'Robert Mclean',
            email: 'roert@gmail.com',
            phone: '666-777-888',
            type: 'personal'
        }]
    }
    const [state, dispatch] = useReducer(contactReducer, initialState)

    // Add contact
    // Set current contact
    // Delete contact
    // Clear current contact
    // Update contact_state
    // Filter contacts
    // Clear filter

    return (
        <ContactContext.Provider
            value={{ contacts: state.contacts }}>
            {props.children}
        </ContactContext.Provider>
    )

}

export default ContactState;