import { NavLink } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="bg-[#A3C49B]   shadow-md flex text-lg gap-3 font-medium h-10 items-center ">
      <NavLink to="/" className={({ isActive }) => isActive ? "text-purple-700" : "text-white" }>
       <div className='text-2xl text-red-700 font-extrabold italic  '>MOHAN </div>
      </NavLink>
      <NavLink to="/services" className={({ isActive }) => isActive ? "text-green-700" : "text-violet-800" }>Services</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "text-green-700" : "text-violet-800" }>About</NavLink>
      <NavLink to="/gallary" className={({ isActive }) => isActive ? "text-green-700" : "text-violet-800" }>Gallary</NavLink>

      <NavLink to="/socialmedia" className={({ isActive }) => isActive ? "text-green-700" : "text-violet-800" }>SocialMedia</NavLink>
      <NavLink to='/contact' className={({ isActive }) => isActive ? "text-green-700" : "text-violet-800" }>Contact </NavLink>
     
    </nav>
  );
}

export default Navbar;
