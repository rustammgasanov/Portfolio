import React from 'react'
import data from '../data/Data'

const Footer = () => {
  return (
    <footer className='bg-[var(--body)] p-[32px_0px] border-t'>
      <p className='text-[18px] text-[var(--white)] font-[600] text-center'>{data?.footer_title}</p>
    </footer>
  )
}

export default Footer