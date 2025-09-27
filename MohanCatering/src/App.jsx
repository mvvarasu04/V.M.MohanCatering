import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { Home } from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Gallary from '../src/pages/Gallary.jsx';
import Socialmedia from '../src/pages/SocialMedia.jsx';
import Contact from  '../src/pages/Contact.jsx';


import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path='/Socialmedia' element={<Socialmedia />} />
          <Route path='/gallary' element={<Gallary />} />
          <Route path='/contact' element={<Contact />} /> 

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
