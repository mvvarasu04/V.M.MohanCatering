import React, { useState, useEffect } from 'react';
import BackgroundVM from '../assets/images/BackgroundVM.png';
import vmc2 from '../assets/images/vmc2.png';
import vmc3 from '../assets/images/vmc3.png';

export const Home = () => {
  const languages = ['நாங்கள் உணவை மட்டும் பரிமாறுவதில்லை - நினைவுகளையும் பரிமாறுகிறோம்.', 
    'మేము కేవలం ఆహారాన్ని మాత్రమే అందించము - జ్ఞాపకాలను కూడా అందిస్తాము.',
    'ഞങ്ങൾ ഭക്ഷണം മാത്രമല്ല വിളമ്പുന്നത് - ഓർമ്മകളും വിളമ്പുന്നു.',
    'நாங்கள் உணவை மட்டும் பரிமாறுவதில்லை - நினைவுகளையும் பரிமாறுகிறோம்.', 
    'ನಾವು ಕೇವಲ ಆಹಾರವನ್ನು ಬಡಿಸುವುದಿಲ್ಲ - ನಾವು ನೆನಪುಗಳನ್ನು ಬಡಿಸುತ್ತೇವೆ.', 
    'हम सिर्फ खाना नहीं परोसते - हम यादें भी परोसते हैं', 
    'We don’t just serve food—We serve Memories.',
     'ہم صرف کھانا پیش نہیں کرتے - ہم یادیں پیش کرتے ہیں۔'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % languages.length);
    }, 1500); // 15 seconds

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
    <div
      style={{
        backgroundImage: `url(${BackgroundVM})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
      className='flex flex-col'
    >
      <h1 className='font-bold text-6xl text-green-600 text-center py-10  font-serif'>
        V.M Mohan <br />
        <span className='text-black text-4xl font-sans'>Catering & Events</span>
      </h1>

      <h2 className='text-3xl text-green-700 text-center font-semibold font-mono'>
        Food is symbolic of Love💚
        <span className='text-black'> when words are inadequate...</span>
      </h2>

      <div className='flex justify-center items-center gap-5 py-8'>
        <img src={vmc3} alt="Mohan Catering Image" className='w-100 h-100 justify-end' />
        <img src={vmc2} alt="Mohan Catering Image" className='w-120 h-100 justify-end' />
      </div>

      <div>
        <h2 className='text-2xl text-center text-green-800 font-bold py-2'>
          {languages[currentIndex]}
        </h2>
        <p className=' text-xl text-center'>
          <span>At Mohan Catering, we believe food is more than nourishment—it's emotion, tradition, and celebration.</span><br />
            <span>From the first aroma that greets your guests to the final spoonful that lingers on the palate,</span><br />
            <span>we craft culinary experiences that awaken the senses and warm the soul.</span>
        </p>

       </div>
    </div>
    <div className='bg-gradient-to-tl to-blue-400  text-center'>
      
        <div>
        <h1>
          Forget the old-school catering. Welcome to V.M. Mohan Caterers.
        </h1>
        <h2>What we bring to the table (literally):</h2>
        <p>
          Lip-smacking menus that make your guests forget their diets <br />
          <span>Indoor, outdoor, rooftop, basement—we cater anywhere short of the moon</span> <br />
          <span>Presentation so pretty, your food might get more Instagram likes than you</span>
        </p>
        </div>

        

      </div>

    
   </> 
  );
};
