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
import AlertState from './context/alert/AlertState';
import Alerts from './components/layouts/Alerts';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <div >
              <Navbar />
              <div className='container'>
                <Alerts />
                <Routes>
                  <Route exact path='/' element={<PrivateRoute component={Home} />} ></Route>
                  <Route exact path='/about' element={<About />} ></Route>
                  <Route exact path='/register' element={<Register />} ></Route>
                  <Route exact path='/login' element={<Login />} ></Route>
                </Routes>
              </div>
            </div>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
