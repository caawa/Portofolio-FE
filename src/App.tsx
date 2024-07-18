import React, { useEffect, useState } from 'react'
import './App.css';
import Navbar from './component/Navbar.tsx'
import Footer from './component/footer.tsx'
import Hero from './component/hero.tsx'
import Project from './component/project.tsx'
import StudentList from './component/StudentList.tsx';
import { motion, useAnimation } from 'framer-motion';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { BrowserRouter as Router } from 'react-router-dom';
 

function App() {
    const controls = useAnimation();
  
    useEffect(() => {
      controls.start(i => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.3 }
      }));
    }, [controls]);
  
    return (
      <Router>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className='font-sans bg-neutral-950 m-0 text-slate-50'>
            <Navbar />
            <Hero />
            <Project />
            <StudentList /> 
            <Footer/>
        </div>
      </motion.div>
    </Router>
  );
}

export default App
