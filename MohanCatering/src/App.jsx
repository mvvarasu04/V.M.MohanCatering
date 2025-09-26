import React from 'react' 
import { Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar.jsx';
import Footer from '../src/components/Footer.jsx';
import { Home }  from './pages/Home.jsx';
import Services from '../src/pages/Services.jsx'

import './App.css'

function App() {
 

  return (
    <>
     <Navbar />
     <Home />
     
     <Footer />
    </>
  )
}

export default App
