import React from 'react'

const IconsCard = ({link, color, svg}) => {
  return (
    <a href={link} className={`max-w-[630px] h-[200px] flex justify-center bg-[var(${color})] inline-block rounded shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg max-[630px]:h-[150px]`}>
           {svg}
    </a>
  )
}

export default IconsCard
