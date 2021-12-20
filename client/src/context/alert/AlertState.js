import React, { useReducer } from 'react'
import AlertContext from './AlertContext'
import AlertReducer from './AlertReducer'
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';

const AlertState = props => {
    const initialState = []
    const [state, dispatch] = useReducer(AlertReducer, initialState)

    // Set alert
    const setAlert = (message, type) => {

    }

    return (
        <AlertContext.Provider
            value={{

            }
            }>
            {props.children}
        </ AlertContext.Provider >
    )

}

export default AlertState;