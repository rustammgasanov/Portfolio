import React from 'react'
import GithubSvg from '../image/svg/GithubSvg'
import InstagramSvg from '../image/svg/InstagramSvg'
import LinkedinSvg from '../image/svg/LinkedinSvg'
import TelegramSvg from '../image/svg/TelegramSvg'
import WhatsappSvg from '../image/svg/WhatsappSvg'
import GmailSvg from '../image/svg/GmailSvg'
import IconsCard from './IconsCard'
import data from '../data/Data'

const Icons = () => {
  return (
    <div className='grid grid-cols-4 gap-[20px] mt-[40px] max-[900px]:grid-cols-2 max-[630px]:grid-cols-1 container'>
      <a href={data?.contact?.telegram} className={`max-w-[630px] h-[200px] flex justify-center bg-[var(--telegram-blue)] inline-block rounded shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg max-[630px]:h-[150px]`}>
        <TelegramSvg/>
      </a>
      <a href={data?.contact?.linkedin} className={`max-w-[630px] h-[200px] flex justify-center bg-[var(--linkedin-blue)] inline-block rounded shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg max-[630px]:h-[150px]`}>
        <LinkedinSvg/>
      </a>
      <a href={data?.contact?.whatsapp} className={`max-w-[630px] h-[200px] flex justify-center bg-[var(--whatsapp-green)] inline-block rounded shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg max-[630px]:h-[150px]`}>
        <WhatsappSvg/>
      </a>
      <a href={data?.contact?.mail} className={`max-w-[630px] h-[200px] flex justify-center bg-[var(--gmail-red)] inline-block rounded shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg max-[630px]:h-[150px]`}>
        <GmailSvg/>
      </a>
        {/* <IconsCard
        link={data?.contact?.telegram}
        color={"--telegram-blue"}
        svg={<TelegramSvg/>}
        />
        <IconsCard
        link={data?.contact?.linkedin}
        color={"--linkedin-blue"}
        svg={<LinkedinSvg/>}
        />
        <IconsCard
        link={data?.contact?.whatsapp}
        color={"--whatsapp-green"}
        svg={<WhatsappSvg/>}
        />
        <IconsCard
        link={data?.contact?.mail}
        color={"--gmail-red"}
        svg={<GmailSvg/>}
        /> */}
    </div>
  )
}

export default Icons