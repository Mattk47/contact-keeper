import React, { useReducer } from 'react'
import alertContext from './alertContext'
import { v4 } from 'uuid';
import AlertReducer from './alertReducer'
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';

const AlertState = props => {
    const initialState = []
    const [state, dispatch] = useReducer(AlertReducer, initialState)

    // Set alert
    const setAlert = (message, type, timeout = 5000) => {
        const id = v4();
        dispatch({
            type: SET_ALERT, payload: { message, type, id }
        })
        setTimeout(() => { dispatch({ type: REMOVE_ALERT, payload: id }) }, timeout)
    }

    return (
        <alertContext.Provider
            value={{
                setAlert,
                alerts: state
            }
            }>
            {props.children}
        </ alertContext.Provider >
    )

}

export default AlertState;