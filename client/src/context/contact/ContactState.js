import React, { useReducer } from 'react'
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
        }],
        current: null,
        filtered: null
    }
    const [state, dispatch] = useReducer(contactReducer, initialState)

    // Add contact

    const addContact = contact => {
        contact.id = 4
        dispatch({ type: ADD_CONTACT, payload: contact })
    }

    // Delete contact

    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id })

    }

    // Set current contact

    const setCurrentContact = contact => {
        dispatch({ type: SET_CURRENT, payload: contact })

    }
    // Clear current contact

    const clearCurrentContact = () => {
        dispatch({ type: CLEAR_CURRENT })

    }
    // Update contact_state

    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact })

    }

    // Filter contacts

    const filterContacts = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text })

    }
    // Clear filter

    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER })

    }


    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                clearCurrentContact,
                setCurrentContact,
                updateContact,
                filterContacts,
                clearFilter
            }}>
            {props.children}
        </ContactContext.Provider>
    )

}

export default ContactState;