import React from 'react'
import visitingcard1 from '../assets/images/visitingcard1.jpeg';
import vmlogo1 from "../assets/images/vmlogo1.jpeg"

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#5F7F4C] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2"> V.M MOHAN CATERINGS</h2>
          <p className="text-sm text-white">
           From First Bite to Forever Memory
          </p>
          <img src={vmlogo1}
           alt="VM Mohan Catering Visiting card"
           className='w-50 h-auto rounded-full' />
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
        
             <ul className="space-y-1 text-white">
        <li><Link to="/" className="hover:text-violet-300">Home</Link></li>
        <li><Link to="/services" className="hover:text-violet-300">Services</Link></li>
        <li><Link to="/aboutus" className="hover:text-violet-300">About</Link></li>
        <li><Link to="/socialmedia" className="hover:text-violet-300">SocialMedia</Link></li>
        <li><Link to="/gallary" className="hover:text-violet-300">Gallary</Link></li>
        <li><Link to="/contact" className="hover:text-violet-300">Contact</Link></li>
    
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Meet Us</h3>
          <div>
            <img src={visitingcard1}
            alt="VM Mohan Catering Visiting Card"
            className='w-auto h-70' />
            
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-sm text-gray-100">
        © {new Date().getFullYear()} V.M.MOHAN CATERINGS . All rights reserved.
        <p>
          Designed by <a href="mailto:mvvarasu@gmail.com" className="text-white font-bold hover:text-blue-400 ">VeeraVanniyaArasu M</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;