import React from 'react';

const HeaderSection = ({ title, name }) => (
  <h3 data-aos="zoom-out-up" id={name} className='text-center text-[var(--yellow)] text-[36px] font-[700] mt-[52px] mb-[52px]'>
    {title}
  </h3>
  
);

export default HeaderSection;
