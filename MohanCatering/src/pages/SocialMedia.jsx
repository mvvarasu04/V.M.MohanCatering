import React from 'react';
import fbvm from '../assets/icons/fbvm.png';
import instavm from '../assets/icons/instavm.png';
import wavm from '../assets/icons/wavm.png';
import youtubevm from '../assets/icons/youtubevm.png';


const colorMap = {
  Instagram: {
    text: 'text-pink-600',
    border: 'border-pink-600',
    shadow: 'shadow-pink-400',
  },
  Facebook: {
    text: 'text-blue-600',
    border: 'border-blue-600',
    shadow: 'shadow-blue-400',
  },
  YouTube: {
    text: 'text-red-600',
    border: 'border-red-600',
    shadow: 'shadow-red-400',
  },
  WhatsApp: {
    text: 'text-green-600',
    border: 'border-green-600',
    shadow: 'shadow-green-400',
  },
};

const socialMediaData = [
  {
    name: 'Instagram',
    message: 'See our vibrant celebrations in pictures.',
    icon: instavm,
    link: 'https://www.instagram.com/vmmohanevents/',
    bg: 'bg-pink-500',
    hover: 'hover:bg-pink-600',
  },
  {
    name: 'Facebook',
    message: 'Join our community and stay updated.',
    icon: fbvm ,
    link: 'https://www.facebook.com/vmmohanevents/',
    bg: 'bg-blue-600',
    hover: 'hover:bg-blue-700',
  },
  {
    name: 'YouTube',
    message: 'Watch our events come to life.',
    icon: youtubevm,
    link: 'https://www.youtube.com/channel/UC-yourchannelid',
    bg: 'bg-red-600',
    hover: 'hover:bg-red-700',
  },
  {
    name: 'WhatsApp',
    message: 'Chat with us for bookings and info.',
    icon: wavm,
    link: 'https://wa.me/919876543210',
    bg: 'bg-green-500',
    hover: 'hover:bg-green-600',
  },
];

const SocialMedia = () => {
  return (
  <div>

    <h1>  Enjoy our taste as Entertainment  </h1>
    
    <div className="min-h-screen flex flex-wrap justify-center items-center gap-10 p-10">
        
      {socialMediaData.map((platform, index) => {
        // Get the specific color classes for the current platform
        const colors = colorMap[platform.name];

        return (
          // The Phone Frame (Outer Shell)
          <div
            key={index}
            // Unique Border Color and Glow Effect
            className={`w-64 h-96 bg-gray-800 rounded-[3rem] p-2 shadow-2xl ${colors.shadow} transition-all duration-500 hover:scale-105 relative border-4 ${colors.border} hover:shadow-xl`}
          >
            {/* Mock Notch/Speaker at the top */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-700 rounded-full"></div>

            {/* The Phone Screen (Inner Display) */}
            <div className="w-full h-full bg-white rounded-[2.5rem] p-4 flex flex-col justify-between items-center text-center overflow-hidden border-4 border-gray-900">
              
              {/* Screen Content - Top Bar (Kept neutral for screen realism) */}
              <div className="w-full flex justify-between text-xs text-gray-500 font-semibold mb-4">
                <span>9:41 AM</span>
                <div className="flex space-x-1">
                  <i className="fas fa-signal"></i>
                  <i className="fas fa-wifi"></i>
                  <i className="fas fa-battery-three-quarters"></i>
                </div>
              </div>

              {/* Screen Content - Main Info */}
              <div className="flex-grow flex flex-col justify-center items-center px-2">
                <div className={`${platform.bg} w-16 h-16 rounded-xl flex justify-center items-center mb-3 shadow-lg`}>
                  <i className={`${platform.icon} text-3xl text-white`}></i>
                 
                </div>
                {/* Unique Text Color for the Name */}
                <h2 className={`text-2xl font-extrabold mb-1 ${colors.text}`}>{platform.name}</h2>
                <p className={`text-sm mb-5 text-gray-600`}>{platform.message}</p>
              </div>

              {/* Screen Content - Action Button (Social Media Link) */}
              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full ${platform.bg} ${platform.hover} text-white font-bold py-2 rounded-full transition duration-300 shadow-md text-sm uppercase tracking-wider`}
              >
                Go to Channel
              </a>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default SocialMedia;