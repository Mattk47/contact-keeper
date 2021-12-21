import React, { useReducer } from 'react'
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'
import axios from 'axios'
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

    const loadUser = login => {
        console.log('load user')

    }

    // Register user
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('http://localhost:9090/api/users', formData, config)
            console.log(res)
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: REGISTER_FAIL,
                payload: error.response.data.msg
            })
        }
    }
    // Login user

    const login = login => {
        console.log('login')

    }
    // Logout 

    const logOut = login => {
        console.log('log out')

    }
    // Clear errors

    const clearErrors = () => {
        dispatch({ type: CLEAR_ERRORS })

    }


    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                load: state.load,
                error: state.error,
                user: state.user,
                register,
                loadUser,
                login,
                logOut,
                clearErrors
            }}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthState;