import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackgroundVM from '../assets/images/BackgroundVM.png';
import vmc2 from '../assets/images/vmc2.png';
import awardimg from '../assets/images/awardimg.jpeg';
import BackgroundVM3 from '../assets/images/BackgroundVM3.png';
// import images
import Heritage from '../assets/images/Heritage.png';
import Taste from '../assets/images/Taste.png';
import Quality from '../assets/images/Quality.png';

export const Home = () => {
  const languages = [
    'நாங்கள் உணவை மட்டும் பரிமாறுவதில்லை - நினைவுகளையும் பரிமாறுகிறோம்.',
    'మేము కేవలం ఆహారాన్ని మాత్రమే అందించము - జ్ఞాపకాలను కూడా అందిస్తాము.',
    'ഞങ്ങൾ ഭക്ഷണം മാത്രമല്ല വിളമ്പുന്നത് - ഓർമ്മകളും വിളമ്പുന്നു.',
    'நாங்கள் உணவை மட்டும் பரிமாறுவதில்லை - நினைவுகளையும் பரிமாறுகிறோம்.',
    'ನಾವು ಕೇವಲ ಆಹಾರವನ್ನು ಬಡಿಸುವುದಿಲ್ಲ - ನಾವು ನೆನಪುಗಳನ್ನು ಬಡಿಸುತ್ತೇವೆ.',
    'हम सिर्फ खाना नहीं परोसते - हम यादें भी परोसते हैं',
    'We don’t just serve food—We serve Memories.',
    'ہم صرف کھانا پیش نہیں کرتے - ہم یادیں پیش کرتے ہیں۔'
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % languages.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BackgroundVM})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', 
        }}
        className='flex flex-col items-center justify-center px-4 sm:px-8'
      >
        
        <h1 className='font-bold text-3xl sm:text-5xl lg:text-6xl text-green-600 text-center py-6 font-serif'>
          V.M Mohan <br />
          
          <span className='text-black text-xl sm:text-3xl font-sans'>Catering & Events</span>
        </h1>

        <h2 className='text-base sm:text-xl lg:text-2xl text-green-700 text-center font-semibold font-mono'>
          Food is symbolic of Love💚 <span className='text-black'>when words are inadequate...</span>
        </h2>

        
        <div className=' items-center gap-3 py-6'>
          
          <img src={awardimg} alt="Mohan Catering Image" className='w-32 sm:w-f lg:w-full h-auto rounded-lg shadow-md' />
        </div>

        <div className='text-center'>
          <h2 className='text-base sm:text-xl lg:text-2xl text-green-800 font-bold py-2 px-2'>
            {languages[currentIndex]}
          </h2>
          <p className='text-sm sm:text-base lg:text-lg text-center text-gray-800 px-4'>
            <span>At Mohan Catering, we believe food is more than nourishment—it's emotion, tradition, and celebration.</span><br />
            {/* These lines were combined into one continuous flow for better readability on small screens */}
            <span>From the first aroma that greets your guests to the final spoonful that lingers on the palate, we craft culinary experiences that awaken the senses and warm the soul.</span>
          </p>
        </div>
      </div>

      {/* --- */}

      <div
        style={{
          backgroundImage: `url(${BackgroundVM3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='mb-5 py-10 px-4 sm:px-8 text-center'
      >
        {/* Ensured all heading sizes are well-controlled on mobile */}
        <h1 className='text-xl sm:text-3xl font-bold mb-2'>Forget the old-school catering. <br />Welcome to V.M. Mohan Caterers.</h1>
        <h2 className='text-lg sm:text-2xl font-semibold mb-4'>What we bring to the table (literally):</h2>
        <p className='text-sm sm:text-lg text-gray-700 mb-6'>
          Lip-smacking menus that make your guests forget their diets <br />
          <span>Indoor, outdoor, rooftop, basement—we cater anywhere short of the moon</span> <br />
          <span>Presentation so pretty, your food might get more Instagram likes than you</span>
        </p>

        {/* --- */}

        <div className='font-serif mb-10'>
          <h3 className='text-base font-semibold'>WHAT WE DO</h3>
          <h1 className='text-xl font-bold'>Banana Leaf & Beyond</h1>
          <h2 className='text-lg font-medium mb-6'>Rooted in tradition, elevated in taste.</h2>

          {/* Grid setup is already responsive: 1 column on mobile, 2 on small screens, 3 on large screens */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            
            <div className='p-4 justify-center     border-4 rounded-lg transition duration-300 border-green-500 shadow-lg hover:shadow-green-500 hover:scale-105 bg-white/80'>   
              <h2 className='text-lg font-bold text-green-700 mb-2'>Wedding Event</h2>
              <img src={vmc2} alt="Mohan Catering Image" className='w-auto h-auto rounded-lg shadow-md gap-4 ' />
              <p className='text-sm text-gray-700 py-4'>From banana leaf tales to gourmet grace, We serve memories wrapped in every plate...</p>
            </div>
            <div className='p-4 border-4 rounded-lg transition duration-300 border-pink-500 shadow-lg hover:shadow-pink-500 hover:scale-105 bg-white/80'>
             
              <h2 className='text-lg font-bold text-pink-700 mb-2'>Cakes & Candles Party</h2>
              <img src={vmc2} alt="Mohan Catering Image" className='w-auto h-auto rounded-lg shadow-md ' />
              <p className='text-sm text-gray-700 py-4'>Balloons rise, laughter flows, We serve joy where flavor glows...</p>
            </div>
            <div className='p-4 border-4 rounded-lg transition duration-300 border-blue-500 shadow-lg hover:shadow-blue-500 hover:scale-105 bg-white/80'>
              <h2 className='text-lg font-bold text-blue-700 mb-2'>Corporate Event</h2>
               <img src={vmc2} alt="Mohan Catering Image" className='w-auto h-auto rounded-lg shadow-md ' />
              <p className='text-sm text-gray-700'>Ideas ignite, connections grow, We fuel moments that steal the show...</p>
            </div>
          </div>

          <div className='mt-6'>
            <Link to="/services">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                View All Services
              </button>
            </Link>
          </div>
        </div>

        {/* --- */}

        <div className='py-5'>
          <h3 className='text-lg font-bold mb-4'>Crafted Cuisine That Captivates Every Guest</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='p-4 border-4 rounded-lg transition duration-300 border-yellow-500 shadow-lg hover:shadow-yellow-500 hover:scale-105 bg-white/80'>
              <h2 className='text-lg font-bold text-yellow-700 mb-2'>True Flavors</h2>
              <img src={Taste} alt="Mohan Catering Image" className='w-auto h-auto rounded-lg shadow-md ' />
              <p className='text-sm text-gray-700'>Rooted in tradition, refined with care. Every dish tells a story of authenticity...</p>
            </div>
            <div className='p-4 border-4 rounded-lg transition duration-300 border-purple-500 shadow-lg hover:shadow-purple-500 hover:scale-105 bg-white/80'>
              <h2 className='text-lg font-bold text-purple-700 mb-2'>Best Quality</h2>
              <img src={Quality} alt="Mohan Catering Image" className='w-auto h-auto rounded-lg shadow-md ' /> 
                

              <p className='text-sm text-gray-700'>From sourcing to serving, we never compromise. Every bite reflects our commitment to excellence...</p>
            </div>
            <div className='p-4 border-4 rounded-lg transition duration-300 border-red-500 shadow-lg hover:shadow-red-500 hover:scale-105 bg-white/80'>
              <h2 className='text-lg font-bold text-red-700 mb-2'>Heritage</h2>
              <img src={Heritage} alt="Mohan Catering Image" className='w-auto h-auto rounded-lg shadow-md ' />
              <p className='text-sm text-gray-700'>Inspired by tradition, elevated for today. We serve memories wrapped in flavor...</p>
            </div>
             
          </div>
          <div className='mt-6'>
            <Link to="/aboutus">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Our Story
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};