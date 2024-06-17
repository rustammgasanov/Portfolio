import React from 'react'
import Popup from './Popup'

const PortfolioCard = ({ link, title, skills, img}) => {
  return (
    <div className='max-w-[700px] border border-[var(--white)] rounded-[16px]'>
        <img className='rounded-[16px_16px_0px_0px]' src={img} alt=''/>
        <div className='p-[10px_60px] flex flex-col justify-center'>
          <a href={link} className='text-[24px] text-[var(--white)] font-[600] text-center border-b p-[0px_0px_5px]'>{title}</a>
          <p className='text-[18px] text-[var(--white)] text-center p-[5px_0px_0px]'>{ skills }</p>
        </div>
    </div>
  )
}

export default PortfolioCard