import React, { useContext, useEffect } from 'react'
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm'
import Filter from '../contacts/Filter'
import AuthContext from '../../context/auth/AuthContext'
const Home = () => {
    const authContext = useContext(AuthContext)

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, [])

    return (
        <div className="grid-2">
            <div>
                <ContactForm />
            </div>
            <div>
                <Filter />
                <Contacts />
            </div>
        </div>
    )
}

export default Home
