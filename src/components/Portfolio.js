import React from 'react'
import PortfolioCard from './PortfolioCard'
import CeltHighSchool from '../image/chs.png'
import Bamper from '../image/bamper.png'
import Lucero from '../image/lucero.png'
import CeltVip from '../image/cvip.png'
import data from '../data/Data'

const Portfolio = () => {
  return (
    <section className='container grid grid-cols-2 gap-[40px] max-[740px]:grid-cols-1 place-items-center'>
        <PortfolioCard
        link={data?.portfolio?.celt_high_school?.link}
        title={data?.portfolio?.celt_high_school?.title}
        img={CeltHighSchool}
        skills={data?.portfolio?.celt_high_school?.skills}
        />
        <PortfolioCard
        link={data?.portfolio?.bamper?.link}
        title={data?.portfolio?.bamper?.title}
        img={Bamper}
        skills={data?.portfolio?.bamper?.skills}
        />
        <PortfolioCard
        link={data?.portfolio?.lucero_numerology?.link}
        title={data?.portfolio?.lucero_numerology?.title}
        img={Lucero}
        skills={data?.portfolio?.lucero_numerology?.skills}
        />
        <PortfolioCard
        link={data?.portfolio?.celt_vip_desktop?.link}
        title={data?.portfolio?.celt_vip_desktop?.title}
        img={CeltVip}
        skills={data?.portfolio?.celt_vip_desktop?.skills}
        />
    </section>
  )
}

export default Portfolio