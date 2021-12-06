import './App.css';
import React from 'react'
import Navbar from './components/layouts/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactState from './context/contact/ContactState'

function App() {
  return (
    <ContactState>
      <Router>
        <div >
          <Navbar />
          <div className='container'>
            <Routes>
              <Route exact path='/' element={<Home />} ></Route>
              <Route exact path='/about' element={<About />} ></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </ContactState>
  );
}

export default App;
