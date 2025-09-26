import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-lime-300 via-green-100 to-lime-300 shadow-lg px-4 py-3 flex items-center justify-between relative z-50">
      {/* Logo */}
      <NavLink to="/" className="flex items-center gap-2">
        <div className="text-2xl text-red-700 font-extrabold italic hover:scale-105 transition-transform duration-300">
          MOHAN
        </div>
      </NavLink>

      
      <button
        className="md:hidden flex items-center text-green-800 hover:text-green-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Slide-In Menu */}
      <div className={`md:hidden fixed top-0 left-0 h-screen w-64 bg-lime-200 shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col gap-6 p-6 pt-20 text-lg font-medium">
          {[
            { to: '/', label: 'Home' },
            { to: '/services', label: 'Services' },
            { to: '/about', label: 'About' },
            { to: '/gallary', label: 'Gallary' },
            { to: '/socialmedia', label: 'SocialMedia' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md transition duration-300 ease-in-out ${
                  isActive
                    ? 'text-green-700 underline underline-offset-4'
                    : 'text-violet-800 hover:text-green-600 hover:underline hover:scale-105'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:items-center gap-6 text-lg font-medium">
        {[
          { to: '/services', label: 'Services' },
          { to: '/about', label: 'About' },
          { to: '/gallary', label: 'Gallary' },
          { to: '/socialmedia', label: 'SocialMedia' },
          { to: '/contact', label: 'Contact' },
        ].map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition duration-300 ease-in-out ${
                isActive
                  ? 'text-green-700 underline underline-offset-4'
                  : 'text-violet-800 hover:text-green-600 hover:underline hover:scale-105'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
