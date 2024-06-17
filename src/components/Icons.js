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
        <IconsCard
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
        />
    </div>
  )
}

export default Icons