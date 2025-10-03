import React, { useState } from 'react';
import { motion } from 'framer-motion';


// Image Imports (Keeping them for context)
import sweet1 from "../assets/images/sweet1.jpeg";
import sweet2 from "../assets/images/sweet2.jpeg";
import sweet3 from "../assets/images/sweet3.jpeg";
import sweet4 from "../assets/images/sweet4.jpeg"; 
import sweet5 from "../assets/images/sweet5.jpeg";
import sweet6 from "../assets/images/sweet6.jpeg";
import sweet7 from "../assets/images/sweet7.jpeg"; 
import sweet8 from "../assets/images/sweet8.jpeg";
import sweet9 from "../assets/images/sweet9.jpeg";
import sweet10 from "../assets/images/sweet10.jpeg";
import sweet11 from "../assets/images/sweet11.jpeg";
import sweet12 from "../assets/images/sweet12.jpeg"; 
import sweet13 from "../assets/images/sweet13.jpeg"; 
import sweet14 from "../assets/images/sweet14.jpeg";
import sweet15 from "../assets/images/sweet15.jpeg";
import sweet16 from "../assets/images/sweet16.jpeg";
import sweet17 from "../assets/images/sweet17.jpeg";
import sweet18 from "../assets/images/sweet18.jpeg";


import gang1 from "../assets/images/gang1.jpeg";
import gang2 from "../assets/images/gang2.jpeg";
import gang3 from "../assets/images/gang3.jpeg";
import gang4 from "../assets/images/gang4.jpeg";
import marriage1 from '../assets/images/marriage1.jpeg';
import marriage2 from '../assets/images/marriage2.jpeg';
import marriage3 from '../assets/images/marriage3.jpeg';
import marriage8 from '../assets/images/marriage8.jpeg';
import image01 from '../assets/images/image01.jpeg'; 
import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg'; 
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";




// DATA ARRAYS
const sweetimages = [
    sweet1, sweet2, sweet3, sweet4, sweet5, sweet6, sweet7, sweet8, 
    sweet9, sweet10, sweet11, sweet12, sweet13, sweet14,sweet15, sweet16, sweet17, sweet18
];

const gangimages = [
    gang1, gang2, gang3,gang4, marriage1, marriage2, marriage3,marriage8,
    image01,image1,image2,image3, img1, img2, img3
];

const videos = [

];



const Gallery = () => {
   
    
   
   
  

    return (
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                V.M Mohan Catering & Events – Gallery
            </h2>

            {/* Review Videos Section */}
            

            {/* Wedding Catering Images Section */}
            <div className="text-center mb-12">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Wedding Catering Images</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto"></p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {gangimages.map((src, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="overflow-hidden rounded-lg shadow-xl"
                        >
                            <img
                                src={src}
                                alt={`Wedding image ${index + 1}`}
                                className="w-full h-64 object-cover transition duration-300 ease-in-out"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
            
            <hr className="my-12 border-gray-200" />

            {/* Sweet Images Section */}
            <div className="text-center mb-12">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Sweet Images</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto"> Our Special Sweets</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {sweetimages.map((src, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="overflow-hidden rounded-lg shadow-xl"
                        >
                            <img
                                src={src}
                                alt={`Sweet image ${index + 1}`}
                                className="w-full h-64 object-cover transition duration-300 ease-in-out"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;