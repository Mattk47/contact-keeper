import './App.css';
import React from 'react'
import Navbar from './components/layouts/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
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
  );
}

export default App;
