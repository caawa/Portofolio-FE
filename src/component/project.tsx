import '../App.css';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import absensi from '../assets/PA.png'

const Project = () => {
  return (
    <motion.div 
      id='project' 
      className='w-full px-4 md:w-4/5 mx-auto min-h-screen flex flex-col justify-center items-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <p className='text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12'>Projects</p>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-center'>
        {[
          { img: absensi, title: "Absensi SMKN 4", description: "Front End", link: "https://example.com/absensi" }
        ].map((project, index) => (
          <Link key={index} to={project.link} className="w-full max-w-xs sm:max-w-sm" target={project.link.startsWith('http') ? "_blank" : "_self"} rel={project.link.startsWith('http') ? "noopener noreferrer" : ""}>
            <motion.div 
              className="card w-full border-2 border-rose-200 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <figure className="px-6 pt-6">
                <LazyLoadImage
                  src={project.img}
                  effect="blur"
                  className="rounded-xl w-full h-auto object-cover transition-all duration-300 hover:opacity-80"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-lg sm:text-xl">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base">
                  {project.description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;