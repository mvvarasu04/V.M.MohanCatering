import { motion } from 'framer-motion';
import vmc1 from "../assets/images/vmc1.png";
import vmc2 from "../assets/images/vmc2.png";
import vmc3 from "../assets/images/vmc3.png";
import vmc4 from "../assets/images/vmc4.png";
import vmc5 from "../assets/images/vmc5.png";
import vmc6 from "../assets/images/vmc6.png";

const images = [
vmc1,
vmc2,
vmc3,
vmc4,
vmc5,
vmc6 

];

const Gallery = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        V.M Mohan Catering & Events – Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={src}
              alt={`Gallery image `}
              className="w-full h-64 object-cover transition duration-300 ease-in-out"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
