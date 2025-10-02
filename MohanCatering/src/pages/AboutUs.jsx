import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Video Imports
import review7 from '../assets/videos/review7.mp4';
import review010 from '../assets/videos/review010.mp4' ; 
import review011 from '../assets/videos/review011.mp4' ; 
import reviewvideo1 from '../assets/videos/reviewvideo1.mp4' ; 

const AboutUs = () => {
    const reviews = [
        {
            id: 1,
            name: "Priya S.",
            rating: "★★★★★",
            text: "V.M. Mohan Catering turned our wedding into a culinary masterpiece! The traditional Tamil dishes were authentic yet beautifully presented. Flawless service from start to finish. Highly recommend for any major event!",
            date: "August 2025"
        },
        {
            id: 2,
            name: "Rajesh K.",
            rating: "★★★★★",
            text: "The team's attention to detail is unmatched. Our corporate event food setup looked Insta-worthy, and the flavors were incredible. They truly deliver 'emotion, elegance, and unforgettable experiences.'",
            date: "May 2025"
        },
        {
            id: 3,
            name: "Sowmya V.",
            rating: "★★★★★",
            text: "We used them for a small family gathering, and they brought the same finesse and care as a large event. The *kalyana virundhu* style menu was a hit! We've found our caterer for life.",
            date: "January 2024"
        },
        {
            id: 4,
            name: "Faseela Parvin",
            rating: "★★★★★",
            text: "Best catering services 😍😍😍They work very kindly and best ✨✨ …",
            date: "July 2023"
        },
        {
            id: 5,
            name: "Sathiyam sss",
            rating: "★★★★★",
            text: "Best catering services for middle class peopels.......Both pricewice and quality wice good.....",
            date: "May 2023"
        },
        {
            id: 6,
            name: "Justin ",
            rating: "★★★★★",
            text: "Excellent service and quality food. Highly recommended for any event. Briyani was top-notch!",
            date: "November 2022"
        },
    ];

    const reviewvideos = [
        review7,
        review010,
        review011,
        reviewvideo1
    ];

    // Video Carousel Logic
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    
    const totalVideos = reviewvideos.length;
    
    // Function to go to the next video
    const goToNext = () => {
        setCurrentVideoIndex((prevIndex) => 
            prevIndex === totalVideos - 1 ? 0 : prevIndex + 1
        );
    };
    
    // Function to go to the previous video
    const goToPrev = () => {
        setCurrentVideoIndex((prevIndex) => 
            prevIndex === 0 ? totalVideos - 1 : prevIndex - 1
        );
    };

    
    return (
        <div className="bg-gradient-to-b from-green-200 to-green-300 text-brown-800 px-6 py-12 font-serif">
            
            {/* Our Story */}
            <section className="max-w-5xl mx-auto mb-12">
                <h1 className="text-4xl font-bold text-orange-700 mb-4 text-center">Our Story</h1>
                <h2 className="text-xl font-semibold text-blue-500 mb-6">Crafted with culture. Delivered with finesse. Remembered forever.</h2>
                <p className="text-lg leading-relaxed">
                    <strong>V.M Mohan Catering & Events</strong> is where <span className="italic text--600">Tamil tradition</span> meets contemporary celebration—every dish a story, every event a legacy.
                    We serve more than food—we serve emotion, elegance, and unforgettable experiences with flawless execution.
                    From Welcome to Send off, our plates carry heritage, our service reflects heart.
                    With trending setups, Insta-worthy presentation, and soulful flavors, we redefine what catering means.
                </p>
            </section>

            {/* Mission & Vision */}
            <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                    <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h2>
                    <p className="text-base leading-relaxed">
                        To elevate every occasion through <span className="font-semibold">exceptional culinary artistry</span> and flawless event execution.
                        We create unforgettable memories by sourcing the finest ingredients, providing personalized service, and planning every detail with care.
                    </p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                    <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h2>
                    <p className="text-base leading-relaxed">
                        To cultivate lifelong relationships with our clients, earning their trust as their exclusive event partner.
                        We aim for sustainable growth while maintaining our commitment to personal touch, exceptional value, and being a place where top talent thrives.
                    </p>
                </div>
            </section>

            {/* Customer Review Videos Carousel (Local MP4 files) */}
            <section className="bg-white py-12 px-4 sm:px-6 lg:px-12 rounded-xl shadow-2xl mb-12">
                <div className="text-center mb-16">
                    <h1 className="text-3xl font-bold text-orange-700 mb-4">Client Video Testimonials</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                        Hear from our happy clients about their experience!
                    </p>
                    <div className="flex justify-center">
                        {/* Container for the carousel frame */}
                        <div className="relative w-full max-w-sm sm:max-w-md">
                            
                            {/* Video Container to force Portrait Aspect Ratio (9:16) */}
                            <div className="relative w-full pb-[177.77%] overflow-hidden rounded-xl shadow-2xl bg-black"> 
                                {/* pb-[177.77%] is for a 9:16 aspect ratio (16 / 9 * 100) */}
                                <motion.video
                                    key={currentVideoIndex} 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    src={reviewvideos[currentVideoIndex]}
                                    controls // This ensures the controls (pause, mute, etc.) are always visible
                                    autoPlay
                                    muted
                                    loop
                                   
                                    // object-cover ensures it fills the portrait container (cropping landscape video if needed)
                                    className="absolute top-0 left-0 w-full h-full object-cover" 
                                >
                                    Your browser does not support the video tag.
                                </motion.video>
                            </div>
                            
                            {/* Navigation Buttons */}
                            <div className="absolute inset-y-0 flex justify-between w-full p-2">
                                <button
                                    onClick={goToPrev}
                                    className="self-center bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition disabled:opacity-30 disabled:cursor-not-allowed"
                                    aria-label="Previous video"
                                >
                                    <FiChevronLeft className="h-6 w-6" />
                                </button>
                                <button
                                    onClick={goToNext}
                                    className="self-center bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition disabled:opacity-30 disabled:cursor-not-allowed"
                                    aria-label="Next video"
                                >
                                    <FiChevronRight className="h-6 w-6" />
                                </button>
                            </div>
                            
                            {/* Current Video Indicator */}
                            <p className="mt-4 text-sm font-medium text-gray-700">
                                Video {currentVideoIndex + 1} of {totalVideos}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-5xl mx-auto mb-12">
                <h1 className="text-3xl font-bold text-blue-700 mb-4">Client Reviews & Testimonials</h1>
                <p className="text-lg mb-6">Hear directly from the clients we've had the pleasure of serving. Your joy is our greatest success.</p>
                    
                <div className="grid md:grid-cols-2 gap-6">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-t-4 border-orange-500">
                            <p className="text-yellow-500 text-xl mb-2">{review.rating}</p>
                            <p className="italic text-base mb-2">"{review.text}"</p>
                            <p className="text-right font-semibold text-blue-600">– {review.name} <span className="text-gray-500">({review.date})</span></p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutUs;