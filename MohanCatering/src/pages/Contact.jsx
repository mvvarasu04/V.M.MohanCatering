import React, { useState, useEffect, useRef } from 'react';

const usePulseEffect = (ref, status) => {
  useEffect(() => {
    const element = ref.current;
    if (status === 'typing' && element) {
      element.classList.add('transition', 'duration-300', 'scale-[1.01]', 'shadow-lg');

      const timer = setTimeout(() => {
        element.classList.remove('scale-[1.01]', 'shadow-lg');
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [status, ref]);
};

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [emoji, setEmoji] = useState('👋');
  const submitButtonRef = useRef(null);

  usePulseEffect(submitButtonRef, status);

  useEffect(() => {
    switch (status) {
      case 'typing':
        setEmoji('✍️');
        break;
      case 'submitting':
        setEmoji('⚡');
        break;
      case 'success':
        setEmoji('🎉');
        break;
      default:
        setEmoji('👋');
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const isTyping = Object.values({ ...formData, [name]: value }).some((val) => val.length > 0);
    setStatus(isTyping ? 'typing' : 'idle');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    }, 3500);
  };

  const handleCopyEmail = () => {
    const email = 'vmmohan.events@gmail.com';
    navigator.clipboard.writeText(email);
    alert(`Email "${email}" copied to clipboard!`);
  };

  const buttonText = {
    idle: 'Send the Dream! ✨',
    typing: 'Ready to Launch?',
    submitting: 'Sending...',
    success: 'Sent! Chat soon! ✅',
  }[status];

  return (
    <div className="min-h-screen bg-gray-50 py-10 sm:py-20 flex justify-center items-start">
      <div className="max-w-6xl w-full mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left Side - Company Info */}
        <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            V.M Mohan Caterings & Events
          </h2>
          <p className="text-gray-600 mb-2">🍽️ Premium Catering & Memorable Events</p>
          
          <div className="mt-4 space-y-3">
            <p className="text-gray-700">
              📍 <span className="font-semibold">Address:</span>  
              No. 123, Celebration Street, Coimbatore, Tamil Nadu
            </p>
            <p className="text-gray-700">
              📞 <span className="font-semibold">Mobile:</span> +91 98765 43210
            </p>
            <p className="text-gray-700">
              ✉️ <span className="font-semibold">Email:</span> vmmohan.events@gmail.com
            </p>
          </div>

          {/* QR Code (replace src with actual QR code image link) */}
          <div className="mt-6 flex justify-center">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?data=+919876543210&size=150x150"
              alt="Location QR"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Something Extra */}
          <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
            <p className="text-indigo-700 font-semibold">✨ Extra</p>
            <p className="text-gray-600 text-sm mt-1">
              Book us for Weddings, Corporate Events, Parties & More.  
              Quality food. Unforgettable experiences. 🌟
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl relative">
          <div
            className={`absolute -top-6 -right-6 text-4xl p-4 bg-white rounded-full shadow-lg transition-transform duration-300 ${
              status === 'typing' ? 'scale-110' : 'scale-100'
            } ${status === 'submitting' ? 'animate-spin' : ''}`}
          >
            {emoji}
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Name/Company</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Captain Awesome"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Your Best Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="hello@yourproject.com"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                The Vision/Problem (Tell us everything!)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="What's the challenge we can solve together?"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-lg font-bold text-white shadow-md transition duration-300 ease-in-out 
                ${
                  status === 'submitting' || status === 'success'
                    ? 'bg-indigo-400 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl'
                }`}
              disabled={status === 'submitting' || status === 'success'}
              ref={submitButtonRef}
            >
              {buttonText}
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">Prefer to skip the form?</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
