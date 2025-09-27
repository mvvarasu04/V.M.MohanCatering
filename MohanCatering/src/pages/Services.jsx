import React from 'react'
import vmc2 from '../assets/images/vmc2.png'
import { motion } from 'framer-motion'

// ServiceCard Component
const ServiceCard = ({ title, subtitle, description, altText }) => {
  return (
    <motion.div
      className='relative p-6 w-full min-h-[500px] border-2 border-transparent rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group'
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.div
        className='absolute inset-0 z-0 rounded-xl'
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: '400% 50%' }}
        transition={{
          duration: 10,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
        style={{
         background: 'linear-gradient(90deg, #86EFAC 0%, #60A5FA 50%, #15803D 100%)',

          backgroundSize: '400% 400%',
        }}
      />
      <div className='relative z-10 bg-white p-6 rounded-xl h-full flex flex-col justify-start'>
        <h1 className='text-3xl font-bold text-gray-800 mb-2'>{title}</h1>
        <h2 className='text-lg font-medium text-blue-600 mb-4'>{subtitle}</h2>
        <img 
          src={vmc2} 
          alt={altText} 
          className='w-full h-48 object-cover rounded-lg mb-4 transform group-hover:scale-[1.02] transition-transform duration-500' 
        />
        <p className='text-gray-600 leading-relaxed flex-grow'>
          {description}
        </p>
        
      </div>
    </motion.div>
  )
}

// Services Component
const Services = () => {
  const servicesData = [
    {
      title: 'Wedding Catering',
      subtitle: 'Your love story deserves a feast as unforgettable as your vows.',
      description: 'We don’t just cater weddings—we become part of your journey. Every dish is crafted with heart, honoring your traditions and dreams. From the first taste to the final toast, we treat your day like our own. Let us serve your memories with flavor, warmth, and soul.',
      altText: 'Wedding catering VM',
    },
    {
      title: 'Corporate Events',
      subtitle: 'Flavors That Speak Louder Than Speeches.',
      description: 'In today’s fast-paced corporate world, every event is more than just a meeting—it\'s a moment to inspire, connect, and celebrate. We believe food is the heart of every gathering. Whether it\'s a high-stakes boardroom lunch, a product launch, or a year-end celebration, our catering transforms corporate events into unforgettable experiences.',
      altText: 'Corporate catering VM',
    },
    {
      title: 'Annaprasana Catering',
      subtitle: 'Your baby’s first bite deserves more than a meal—it deserves a memory.',
      description: 'We understand that Annaprasana is not just a ceremony—it\'s a celebration of love, heritage, and the beginning of a lifelong journey. From the sacred rituals to the joyful feast, we craft every detail with care, emotion, and authenticity.',
      altText: 'Annaprasana catering VM',
    },
    {
      title: 'Birthday Catering',
      subtitle: 'From First Cake to Forever Moments.',
      description: 'Every birthday tells a story. A story of laughter, love, and unforgettable memories. We don’t just serve food—we serve joy, nostalgia, and the magic of togetherness. Whether it’s your child’s first cake smash, your teen’s dream bash, or a surprise party for someone special, we craft experiences that linger long after the candles are blown.',
      altText: 'Birthday catering VM',
    },
    {
      title: 'Baby Shower Catering',
      subtitle: 'Welcoming a Little One with Big Flavor & Heart',
      description: 'A baby shower isn’t just a party—it’s a promise. A promise of love, laughter, and lifelong memories. We believe every dish should carry the joy of new beginnings. Whether it’s the glow of the mom-to-be or the sparkle in grandma’s eyes, we serve more than food—we serve emotion.',
      altText: 'Baby Shower catering VM',
    },
    {
      title: 'Housewarming Catering',
      subtitle: 'Your First Feast, Our Finest Touch',
      description: 'A new home isn’t just bricks and walls—it’s where laughter echoes, memories are made, and flavors become traditions. Celebrate the joy of new beginnings with a feast that feels like home. Our housewarming catering service is crafted to bring warmth, comfort, and celebration to your doorstep.',
      altText: 'Housewarming catering VM',
    },
  ];

  return (
    <div className='py-16 bg-gray-50 overflow-x-hidden' id='services'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12'>
        <motion.h1 
          className='text-5xl font-extrabold text-gray-900 mb-4'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Great Services 🍽️
        </motion.h1>
        <motion.p 
          className='mt-4 text-xl text-gray-600 max-w-3xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At <strong>V.M MOHAN CATERINGS & EVENTS</strong>, we bring flavor, flair, and flawless execution to every event. 
          Whether you're hosting an intimate gathering or a grand celebration, 
          our catering services are designed to delight your guests and make your occasion unforgettable.
        </motion.p>
      </div>

      {/* Responsive Grid Layout */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-4'>
        {servicesData.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
