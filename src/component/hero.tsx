import '../App.css';
import { motion } from 'framer-motion';
import salwa from '../assets/salwa.jpg'; 
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div id='home' className='font-sans bg-neutral-950 m-0 text-slate-50'>
        <div className="hero w-11/12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
          <div className="hero-content flex max-lg:mt-9 flex-col lg:flex-row justify-between items-center w-full">
            <motion.div 
              className='w-full lg:w-1/2 lg:p-8 order-2 lg:order-1 text-left'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h1 className="text-3xl sm:text-5xl md:text-5xl font-extrabold mb-2">
                Hi, I'm 
                <span className='text-rose-200 ml-2'>Salwa</span>
              </h1>
              <h1 className='font-bold text-2xl max-sm:text-base'>I'm a
                <span className='text-rose-200 ml-2'>
                <Typewriter
                  words={['UI / UX Design', 'Frontend Developer', 'Web Developer']}
                  loop={5}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
                </span>
              </h1>
              <p className="py-4 h-full text-sm sm:text-base">
                I am a student who is interested in web development and design. Able to create attractive UI/UX designs and have the ability as a frontend developer. Enthusiastic to keep learning and growing, in web development and design.
              </p>
              <div className="flex justify-start space-x-4">
                <motion.button 
                  className="btn w-20 sm:w-24 bg-rose-200 text-slate-950 rounded-full hover:text-rose-200 hover:border-rose-200 hover:border-2 text-sm sm:text-base"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Hire
                </motion.button>
                <motion.button 
                  className="btn w-28 sm:w-32 bg-neutral-950 border-2 border-rose-200 rounded-full text-rose-200 hover:bg-rose-200 hover:text-slate-950 text-sm sm:text-base"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Contact
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-2/3 sm:w-1/2 lg:w-1/3 order-1 lg:order-2"
            >
              <LazyLoadImage
                src={salwa}
                effect="blur"
                className="rounded-full mb-8 lg:mb-0 lg:mt-10 cursor-pointer transition duration-400 ease-in-out hover:scale-105"
                alt="Salwa's profile picture"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
