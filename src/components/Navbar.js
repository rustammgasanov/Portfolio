import React, { useState } from 'react';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa'; 
import Logo from '../image/svg/Logo'
import GithubSvg from '../image/svg/GithubSvg'
import logo from '../image/logo.png'
import data from '../data/Data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const toggleHome = () => {
  //   setIsOpen(!isOpen)
  //   document.getElementById('home').scrollIntoView({ behavior: 'smooth' })
  // }


  const toggleAbout = () => {
    setIsOpen(!isOpen)
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  }
  const toggleSkills = () => {
    setIsOpen(!isOpen)
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
  }
  const toggleExperience = () => {
    setIsOpen(!isOpen)
    document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
  }
  const toggleWork = () => {
    setIsOpen(!isOpen)
    document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
  }
  const toggleContact = () => {
    setIsOpen(!isOpen)
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className="bg-[var(--body)] p-4 fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">
          <img className='w-[60px]' src={logo}/>
        </div>
        <div className="hidden md:flex space-x-4">
          {/* <p onClick={toggleHome} className="block text-gray-300 hover:text-white py-2">Home</p> */}
          <p onClick={toggleAbout} className="block text-gray-300 hover:text-white py-2">{data?.nav?.nav_5}</p>
          <p onClick={toggleExperience} className="block text-gray-300 hover:text-white py-2">{data?.nav?.nav_2}</p>
          <p onClick={toggleSkills} className="block text-gray-300 hover:text-white py-2">{data?.nav?.nav_3}</p>
          <p onClick={toggleWork} className="block text-gray-300 hover:text-white py-2">{data?.nav?.nav_4}</p>
          <p onClick={toggleContact} className="block text-gray-300 hover:text-white py-2">{data?.nav?.nav_6}</p>
        </div>
        <a href={data?.contact?.github} className="hidden md:flex items-center">
          <GithubSvg
          width={'25px'}
          />
        </a>
        <div className="md:hidden flex items-center">
          {/* Иконка бургера */}
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden text-center bg-[var(--body)]">
          {/* Выпадающее меню для мобильных устройств */}
          {/* <p onClick={toggleHome} className="block text-gray-300 hover:text-white py-2">Home</p> */}
          <p onClick={toggleAbout} className="block text-gray-300 hover:text-white py-2">{data?.nav?.nav_5}</p>
          <p onClick={toggleExperience} className="block text-gray-300 hover:text-white py-2">{data?.nav?.nav_2}</p>
          <p onClick={toggleSkills} className="block text-gray-300 hover:text-white py-2">{data?.nav?.nav_3}</p>
          <p onClick={toggleWork} className="block text-gray-300 hover:text-white py-2">{data?.nav?.nav_4}</p>
          <p onClick={toggleContact} className="block text-gray-300 hover:text-white py-2">{data?.nav?.nav_6}</p>
          <a href={data?.contact?.github} className="block text-gray-300 hover:text-white py-2">
            <FaGithub size={24} className="inline" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;