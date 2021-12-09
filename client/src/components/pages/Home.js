import React from 'react'
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm'
import Filter from '../contacts/Filter'

const Home = () => {
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
