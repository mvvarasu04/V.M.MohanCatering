import React from 'react';

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
      date: "January 2025"
    }
  ];

  const videoId = 'nhaWFgnETVA?si=xuw1ObwCeE_i4N9K';

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

      <hr className="border-dashed bordet-blue-300 my-8" />

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

      <hr className="border-dashed bordet-blue-300 my-8" />

      {/* Reviews Section */}
      <section className="max-w-5xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Client Reviews & Testimonials</h1>
        <p className="text-lg mb-6">Hear directly from the clients we've had the pleasure of serving. Your joy is our greatest success.</p>

        {/* Video */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-blue-500 mb-4">Watch Our Event Showreel</h2>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Client Testimonial Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Written Reviews */}
        <h2 className="text-xl font-semibold text-blue-500 mb-4">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <p className="text-yellow-500 text-xl mb-2">{review.rating}</p>
              <p className="italic text-base mb-2">"{review.text}"</p>
              <p className="text-right font-semibold text-blue-600">– {review.name} ({review.date})</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
