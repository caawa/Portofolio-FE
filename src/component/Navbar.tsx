import '../App.css';
import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
     <div className={`fixed w-full h-20 z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-20 backdrop-blur' : ''}`}>
      <div className="flex justify-between items-center h-full px-10 lg:px-28">
        <div className="text-3xl font-bold">
          <span>Caw</span>
          <span className="ml-2 text-rose-200">Wa!</span>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaXmark className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
        <ul className={`lg:flex lg:items-center lg:gap-16 lg:static absolute top-20 left-1/2 transform -translate-x-1/4 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block w-3/4 p-4 rounded-lg bg-black bg-opacity-25 backdrop-blur-md' : 'hidden'} lg:block`}>
          <li>
            <a
              href="#home"
              className={`block py-2 lg:py-0 px-4 lg:px-0 relative group ${activeLink === 'home' ? 'text-rose-200' : 'text-white'} hover:text-rose-200`}
              onClick={() => handleLinkClick('home')}
            >
              Home
              <span className={`absolute left-0 bottom-0 h-0.5 bg-rose-200 transition-all duration-300 ${activeLink === 'home' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`block py-2 lg:py-0 px-4 lg:px-0 relative group ${activeLink === 'project' ? 'text-rose-200' : 'text-white'} hover:text-rose-200`}
              onClick={() => handleLinkClick('skill')}
            >
              Skills
              <span className={`absolute left-0 bottom-0 h-0.5 bg-rose-200 transition-all duration-300 ${activeLink === 'project' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          </li>
          <li>
            <a
              href="#project"
              className={`block py-2 lg:py-0 px-4 lg:px-0 relative group ${activeLink === 'project' ? 'text-rose-200' : 'text-white'} hover:text-rose-200`}
              onClick={() => handleLinkClick('project')}
            >
              Projects
              <span className={`absolute left-0 bottom-0 h-0.5 bg-rose-200 transition-all duration-300 ${activeLink === 'project' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          </li>
          <li>
            <a
              href="#crud"
              className={`block py-2 lg:py-0 px-4 lg:px-0 relative group ${activeLink === 'contact' ? 'text-rose-200' : 'text-white'} hover:text-rose-200`}
              onClick={() => handleLinkClick('contact')}
            >
              CRUD React
              <span className={`absolute left-0 bottom-0 h-0.5 bg-rose-200 transition-all duration-300 ${activeLink === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
