import React from 'react';

const ExprerienceCard = ({ exp_status, exp_company, exp_date }) => {
  return (
    <div data-aos="zoom-out-up" className='p-[20px] flex justify-between'>
        <div className=''>
            <p className='text-[var(--yellow)] font-[600] text-[24px]'>{exp_status}</p>
            <p className='text-[var(--white)] text-[16px]'>{exp_company}</p>
        </div>
        <p className='text-[var(--white)]'>{exp_date}</p>
    </div>
  );
};

export default ExprerienceCard;
