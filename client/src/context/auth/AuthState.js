import React, { useReducer } from 'react'
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        error: null,
        user: null
    }
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    // Load user
    // Register user
    // Login user
    // Logout 
    // Clear errors


    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                load: state.load,
                error: state.error,
                user: state.user
            }}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthState;