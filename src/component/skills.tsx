import '../App.css';
import { motion } from 'framer-motion';
import { FaHtml5, FaFigma, FaCss3, FaVuejs } from 'react-icons/fa';

const Skills = () => {
  return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        >
          <div id='skills' className='bg-neutral-800 w-full px-4 mx-auto min-h-screen max-sm:h-auto flex flex-col justify-center items-center text-rose-200'>
            <p className='text-center text-3xl sm:text-4xl md:text-5xl font-bold my-20 md:mb-12 text-white'>Skills</p>
            <div className='w-full my-8 grid max-sm:grid-cols-2 max-md:grid-cols-3 grid-cols-4 gap-4 justify-items-center items-center'>
              <div className='bg-neutral-800 h-52 max-md:w-40 max-md:h-40 max-md:mb-6 card border-4 border-rose-200 rounded-lg   p-4 md:p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition duration-300 ease-in-out w-full max-w-[13rem]'>
                <FaFigma className="text-3xl md:text-4xl mb-2" />
                <span className="text-xl md:text-2xl font-medium text-center">Figma</span>
              </div>
              <div className='bg-neutral-800 h-52 max-md:w-40 max-md:h-40 max-md:mb-6 card border-4 border-rose-200 rounded-lg p-4 md:p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition duration-300 ease-in-out w-full max-w-[13rem]'>
                <FaHtml5 className="text-3xl md:text-4xl mb-2" />
                <span className="text-xl md:text-2xl font-medium text-center">HTML</span>
              </div>
              <div className='bg-neutral-800 h-52 max-md:w-40 max-md:h-40 max-md:mb-6 card border-4 border-rose-200 rounded-lg p-4 md:p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition duration-300 ease-in-out w-full max-w-[13rem]'>
                <FaCss3 className="text-3xl md:text-4xl mb-2" />
                <span className="text-xl md:text-2xl font-medium text-center">CSS</span>
              </div>
              <div className='bg-neutral-800 h-52 max-md:w-40 max-md:h-40 max-md:mb-6 card border-4 border-rose-200 rounded-lg p-4 md:p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition duration-300 ease-in-out w-full max-w-[13rem]'>
                <FaVuejs className="text-3xl md:text-4xl mb-2" />
                <span className="text-xl md:text-2xl font-medium text-center">VUE JS</span>
              </div>
            </div>
          </div>
        </motion.div>
  );
};

export default Skills;
