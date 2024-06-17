import React, { useState } from 'react';
import GithubSvg from '../image/svg/GithubSvg'
import LinkedinSvg from '../image/svg/LinkedinSvg'
import InstagramSvg from '../image/svg/InstagramSvg'
import ProfileImage from '../image/profile.JPG'
import Icons from "./Icons"
import data from '../data/Data'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleContact = () => {
    setIsOpen(!isOpen)
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <section id='about' className='container'>
      <div className='flex justify-center items-center gap-[40px] max-[840px]:flex-col'>
        <div className='mt-[52px]'>
          <img className='rounded-[20px] w-[300px] h-[300px]' src={ProfileImage} />

        </div>
        <div className='mt-[35px] max-[770px]:text-center'>
          <p className='text-[24px]  font-[700] text-[var(--white)]'>{data?.name_surname}</p>
          <h1 className='text-[54px]  font-[700] text-[var(--white)] mt-[-20px]'><span className='text-[var(--yellow)]'>{data?.status}</span></h1>
          <p className='italic text-[var(--white)] max-w-[500px] mb-[20px] max-[770px]:max-w-full'>{data?.description}</p>
          <button onClick={toggleContact} className=' p-[5px_10px] border border-solid border-[var(--yellow)] rounded-[16px] text-[var(--yellow)]' >{data?.contact_btn}</button>
        </div>
      </div>
      {/* <div className='flex gap-[15px] mt-[32px] justify-center'>
        <div className='w-[40px] h-[40px] rounded-[50%] border-[1px] border-solid border-[var(--yellow)] p-[4px]'><a href='https://github.com/rustammgasanovv'><GithubSvg /></a></div>
        <div className='w-[40px] h-[40px] rounded-[50%] border-[1px] border-solid border-[var(--yellow)] p-[4px]'><a href='https://www.linkedin.com/in/rustammgasanovv/'><LinkedinSvg /></a></div>
        <div className='w-[40px] h-[40px] rounded-[50%] border-[1px] border-solid border-[var(--yellow)] p-[4px]'><a href='https://www.instagram.com/rustammgasanovv/'><InstagramSvg /></a></div>
      </div> */}
      {/* <Icons/> */}
    </section>
  )
}

export default Header