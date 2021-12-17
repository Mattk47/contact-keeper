import './App.css';
import React from 'react'
import Navbar from './components/layouts/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactState from './context/contact/ContactState'
import AuthState from './context/auth/AuthState'
import Register from './components/auth/Register';
import Login from './components/auth/Login';

function App() {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <div >
            <Navbar />
            <div className='container'>
              <Routes>
                <Route exact path='/' element={<Home />} ></Route>
                <Route exact path='/about' element={<About />} ></Route>
                <Route exact path='/register' element={<Register />} ></Route>
                <Route exact path='/login' element={<Login />} ></Route>
              </Routes>
            </div>
          </div>
        </Router>
      </ContactState>
    </AuthState>
  );
}

export default App;
