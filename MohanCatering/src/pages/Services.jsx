import React from 'react'
import vmc2 from '../assets/images/vmc2.png'
import vmc5 from '../assets/images/vmc5.png'
import { motion } from 'framer-motion'


const ServiceCard = ({ title, subtitle, description, altText, imageSrc }) => {
  const imageToRender = imageSrc || vmc2;

  return (
    <motion.div
      className='relative p-6 w-full min-h-[500px] border-2 border-transparent rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group'
      // PRIMARY EFFECTS: Subtle, springy scale
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
          src={imageToRender} 
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


const AtoZServiceCard = ({ title, subtitle, description, altText, imageSrc }) => {
    const imageToRender = imageSrc || vmc5;

    return (
        <motion.div
           
            className='relative p-6 w-full min-h-[500px] border-4 border-fuchsia-400 shadow-2xl hover:shadow-fuchsia-500/50 transition-shadow duration-300 overflow-hidden group'
            
            whileHover={{ scale: 1.05, rotate: 1.5 }} 
            transition={{ type: 'tween', duration: 0.3 }}
        >
           
            <motion.div
                className='absolute inset-0 z-0' 
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: '400% 50%' }}
                transition={{
                    duration: 12, 
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'loop',
                }}
                style={{
                    background: 'linear-gradient(90deg, #F97316 0%, #D946EF 50%, #FDE047 100%)', 
                    backgroundSize: '400% 400%',
                }}
            />
            {/* Content box - background and text colors updated */}
            <div className='relative z-10 bg-slate-50 p-6 h-full flex flex-col justify-start'> 
                <h1 className='text-3xl font-extrabold text-purple-800 mb-2'>{title}</h1>
                <h2 className='text-lg font-medium text-fuchsia-600 mb-4'>{subtitle}</h2>
                <img 
                    src={imageToRender} 
                    alt={altText} 
                    className='w-full h-48 object-cover mb-4 transform group-hover:scale-[1.02] transition-transform duration-500' // Removed rounded-lg here too
                />
                <p className='text-gray-700 leading-relaxed flex-grow'>
                    {description}
                </p>
            </div>
        </motion.div>
    )
}


const Services = () => {
  const servicesData = [
    {
      title: 'Wedding Catering',
      subtitle: 'Your love story deserves a feast as unforgettable as your vows.',
      description: 'We don’t just cater weddings—we become part of your journey. Every dish is crafted with heart, honoring your traditions and dreams. From the first taste to the final toast, we treat your day like our own. Let us serve your memories with flavor, warmth, and soul.',
      altText: 'Wedding catering VM',
      imageSrc: vmc2,
    },
    {
      title: 'Corporate Events',
      subtitle: 'Flavors That Speak Louder Than Speeches.',
      description: 'In today’s fast-paced corporate world, every event is more than just a meeting—it\'s a moment to inspire, connect, and celebrate. We believe food is the heart of every gathering. Whether it\'s a high-stakes boardroom lunch, a product launch, or a year-end celebration, our catering transforms corporate events into unforgettable experiences.',
      altText: 'Corporate catering VM',
      imageSrc: vmc2,
    },
    {
      title: 'Annaprasana Catering',
      subtitle: 'Your baby’s first bite deserves more than a meal—it deserves a memory.',
      description: 'We understand that Annaprasana is not just a ceremony—it\'s a celebration of love, heritage, and the beginning of a lifelong journey. From the sacred rituals to the joyful feast, we craft every detail with care, emotion, and authenticity.',
      altText: 'Annaprasana catering VM',
      imageSrc: vmc2,
    },
    {
      title: 'Birthday Catering',
      subtitle: 'From First Cake to Forever Moments.',
      description: 'Every birthday tells a story. A story of laughter, love, and unforgettable memories. We don’t just serve food—we serve joy, nostalgia, and the magic of togetherness. Whether it’s your child’s first cake smash, your teen’s dream bash, or a surprise party for someone special, we craft experiences that linger long after the candles are blown.',
      altText: 'Birthday catering VM',
      imageSrc: vmc2,
    },
    {
      title: 'Baby Shower Catering',
      subtitle: 'Welcoming a Little One with Big Flavor & Heart',
      description: 'A baby shower isn’t just a party—it’s a promise. A promise of love, laughter, and lifelong memories. We believe every dish should carry the joy of new beginnings. Whether it’s the glow of the mom-to-be or the sparkle in grandma’s eyes, we serve more than food—we serve emotion.',
      altText: 'Baby Shower catering VM',
      imageSrc: vmc2,
    },
    {
      title: 'Housewarming Catering',
      subtitle: 'Your First Feast, Our Finest Touch',
      description: 'A new home isn’t just bricks and walls—it’s where laughter echoes, memories are made, and flavors become traditions. Celebrate the joy of new beginnings with a feast that feels like home. Our housewarming catering service is crafted to bring warmth, comfort, and celebration to your doorstep.',
      altText: 'Housewarming catering VM',
      imageSrc: vmc2,
    },
  ];

  const atozservicesData = [
    { imageSrc: vmc5, title: 'Decoration', subtitle: 'Transforming spaces into unforgettable experiences.', description: ' Transforming spaces into unforgettable experiences—where every detail tells your story. From elegant weddings to vibrant parties, we craft the ambiance that makes moments magical. ', altText: 'Decoration images', },
    { imageSrc: vmc5, title: 'Wedding Art Studios', subtitle: 'Crafting visual poetry from your most cherished moments.', description: 'Crafting visual poetry from your most cherished moments. Wedding Art Studios — where love meets lens.  ', altText: 'Wedding Art Studios images ', },
    { imageSrc: vmc5, title: 'Music Band', subtitle: 'Rooted in rhythm, rising with the times.', description: 'Rooted in rhythm, rising with the times — we blend heritage with hype.From folk tales to festival stages, our sound turns tradition into tomorrow.  ', altText: 'Music Band images', },
    { imageSrc: vmc5, title: 'Welcome Girls & Dolls', subtitle: 'Starlit stories and dreams stitched in twilight threads.', description: 'Enter a realm where moonlight drapes velvet gowns and dolls cradle secrets in silken palms. Here, every girl is a starlit story, and every doll a dream stitched in twilight threads. ', altText: 'Welcome Girls & Dolls images', },
    { imageSrc: vmc5, title: 'Dance Shows', subtitle: 'A fusion of fire and finesse.', description: 'Feel the pulse, ride the rhythm — this is dance that dares to speak.A fusion of fire and finesse, where every move makes the moment unforgettable.  ', altText: 'Dance Shows images', },
    { imageSrc: vmc5, title: 'Music Concerts', subtitle: 'One night. Infinite rhythms.', description: ' Feel the bass, chase the beat — tonight, the stage becomes a storm of sound." "One night. Infinite rhythms. Let the music move your soul. ', altText: 'Music Concert Images', },
    { imageSrc: vmc5, title: 'Magic Show', subtitle: 'Where illusions shimmer and reality takes a bow.', description: ' Step beyond the curtain, where illusions shimmer and reality takes a bow. A symphony of silence and spectacle, where magic whispers through every gesture. ', altText: 'Magic Show Images ', },
    { imageSrc: vmc5, title: 'Printed Ballons', subtitle: 'A floating canvas of joy.', description: ' Grace in every curve, charm in every print — balloons that elevate every moment. A floating canvas of joy, crafted to celebrate with flair. ', altText: 'Printed Ballons Images', },
    { imageSrc: vmc5, title: 'Buffet Stalls', subtitle: 'A carnival of cravings.', description: ' From sizzling starters to sweet finales — our buffet stalls are a carnival of cravings.Taste the world, one plate at a time. ', altText: 'Buffet Stalls images', },
    { imageSrc: vmc5, title: 'Customize Menu ', subtitle: 'Tailored tastes, curated bites.', description: ' Tailored tastes, curated bites — a menu as original as you.Customization meets cuisine in every delicious detail. ', altText: 'Customize Menu Images', },
    { imageSrc: vmc5, title: 'Fruit Salads', subtitle: 'Nature’s sweetest harvest.', description: ' A burst of color, a bowl of health — dive into nature’s sweetest harvest.From orchard to platter, freshness served with flair ', altText: 'Fruit Salads stall image', },
    { imageSrc: vmc5, title: 'Ice Cream', subtitle: 'Cool treats, warm memories.', description: ' Scoop, smile, repeat — our ice cream turns catering into a celebration.Cool treats, warm memories — one cone at a time.', altText: 'Ice Cream image', },
    { imageSrc: vmc5, title: 'Sweet Beeda', subtitle: 'A celebration in a leaf.', description: 'Folded with flair, flavored with love — our sweet beeda is a celebration in a leaf.A bite of nostalgia, a burst of delight — the perfect end to every meal. ', altText: 'Sweet Beeda Image', },
    { imageSrc: vmc5, title: 'Live Tea Stall', subtitle: 'A stylish steep in every sip.', description: ' Live, fresh, and full of flavor — Tea,Coffee,BadamMilk,etc  that turns moments into memories.A stylish steep in every sip, crafted to warm hearts and elevate your event.', altText: ' Live Tea Stall Image ', },
    { imageSrc: vmc5, title: 'Thamboolam Bag', subtitle: 'A token of joy and tradition.', description: ' With love and blessings we share this token, A Thamboolam bag of joy and tradition.', altText: ' Thamboolam Bag Image ', },
  ];


  return (
    <>
      
      <div className='py-16 bg-gray-50 overflow-x-hidden' id='services'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12'>
          <motion.h1 
            className='text-5xl font-extrabold text-gray-900 mb-4'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Great Services
          </motion.h1>
          <motion.p 
            className='mt-4 text-xl text-gray-600 max-w-3xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At V.M MOHAN CATERINGS & EVENTS , we bring flavor, flair, and flawless execution to every event. 
            Our catering services are designed to delight your guests and make your occasion unforgettable.
          </motion.p>
        </div>

       
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
      
     
      <div className='py-16 bg-slate-100 overflow-x-hidden'> 
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12'>
          <motion.h1 
            className='text-5xl font-extrabold text-gray-900 mb-4'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            **A to Z Event Services** ✨
          </motion.h1>
          <motion.p 
            className='mt-4 text-xl text-gray-700 max-w-3xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Beyond catering, we provide everything you need for a flawless event, from stunning decoration to electrifying entertainment.
          </motion.p>
        </div>
        
       
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-4'>
          {atozservicesData.map((atozservice, index) => (
            <motion.div
              key={atozservice.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <AtoZServiceCard {...atozservice} /> 
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;