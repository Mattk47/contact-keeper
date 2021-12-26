import React, { useReducer } from 'react'
import ContactContext from './ContactContext'
import contactReducer from './contactReducer'
import axios from 'axios'
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
        contacts: null,
        current: null,
        filtered: null,
        error: null
    }
    const [state, dispatch] = useReducer(contactReducer, initialState)
    // Get contacts 

    const getContacts = async () => {

        try {
            const res = await axios.get('http://localhost:9090/api/contacts')

            dispatch({ type: GET_CONTACTS, payload: res.data })

        } catch (error) {
            dispatch({ type: CONTACT_ERROR, payload: error.response.message })
        }
    }


    // Add contact

    const addContact = async contact => {

        try {
            const res = await axios.post('http://localhost:9090/api/contacts', contact)

            dispatch({ type: ADD_CONTACT, payload: res.data })

        } catch (error) {
            dispatch({ type: CONTACT_ERROR, payload: error.response.message })
        }
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

    //  Clear contacts

    const clearContacts = () => {
        dispatch({ type: CLEAR_CONTACTS })

    }

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                error: state.error,
                addContact,
                deleteContact,
                clearCurrentContact,
                setCurrentContact,
                updateContact,
                filterContacts,
                clearFilter,
                getContacts,
                clearContacts,
            }}>
            {props.children}
        </ContactContext.Provider>
    )

}

export default ContactState;