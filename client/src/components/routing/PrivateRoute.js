import React, { useContext } from 'react'
import AuthContext from '../../context/auth/AuthContext'
import { Navigate } from 'react-router-dom'
import Spinner from '../../components/layouts/Spinner';
const PrivateRoute = ({ component: Component }) => {
    const authContext = useContext(AuthContext)
    const { isAuthenticated, loading } = authContext

    if (loading) return <Spinner />;
    if (isAuthenticated) return <Component />;
    return <Navigate to='/login' />
}

export default PrivateRoute;