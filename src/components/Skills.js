import React from 'react'
import SkillsCard from './SkillsCard'
import data from '../data/Data'

const Skills = () => {
  return (
    <section className='container'>
        <h2 className='text-[24px] text-[var(--yellow)] font-[600] mb-[32px]'>{data?.skills?.general}:</h2>
        <div className='grid grid-cols-5 gap-[20px] max-[820px]:grid-cols-4 max-[650px]:grid-cols-3 max-[450px]:grid-cols-2 max-[320px]:grid-cols-1'>
            <SkillsCard skill_title={data?.skills?.git?.title} skill_logo={data?.skills?.git?.img}/>
            <SkillsCard skill_title={data?.skills?.vcs?.title} skill_logo={data?.skills?.vcs?.img}/>
            <SkillsCard skill_title={data?.skills?.vc?.title} skill_logo={data?.skills?.vc?.img}/>
            {/* <SkillsCard skill_title={data?.skills?.pycharm?.title} skill_logo={data?.skills?.pycharm?.img}/> */}
            <SkillsCard skill_title={data?.skills?.npm?.title} skill_logo={data?.skills?.npm?.img}/>
            <SkillsCard skill_title={data?.skills?.github?.title} skill_logo={data?.skills?.github?.img}/>
            <SkillsCard skill_title={data?.skills?.figma?.title} skill_logo={data?.skills?.figma?.img}/>
            <SkillsCard skill_title={data?.skills?.postman?.title} skill_logo={data?.skills?.postman?.img}/>
            <SkillsCard skill_title={data?.skills?.android_studio?.title} skill_logo={data?.skills?.android_studio?.img}/>
        </div>
        <h2 className='text-[24px] text-[var(--yellow)] font-[600] mb-[32px] mt-[32px]'>{data?.skills?.frontend}:</h2>
        <div className='grid grid-cols-5 gap-[20px] max-[820px]:grid-cols-4 max-[650px]:grid-cols-3 max-[450px]:grid-cols-2 max-[320px]:grid-cols-1'>
            <SkillsCard skill_title={data?.skills?.html?.title} skill_logo={data?.skills?.html?.img}/>
            <SkillsCard skill_title={data?.skills?.css?.title} skill_logo={data?.skills?.css?.img}/>
            <SkillsCard skill_title={data?.skills?.sass?.title} skill_logo={data?.skills?.sass?.img}/>
            <SkillsCard skill_title={data?.skills?.tailwind?.title} skill_logo={data?.skills?.tailwind?.img}/>
            <SkillsCard skill_title={data?.skills?.js?.title} skill_logo={data?.skills?.js?.img}/>
            <SkillsCard skill_title={data?.skills?.ts?.title} skill_logo={data?.skills?.ts?.img}/>
            <SkillsCard skill_title={data?.skills?.react?.title} skill_logo={data?.skills?.react?.img}/>
            <SkillsCard skill_title={data?.skills?.react_native?.title} skill_logo={data?.skills?.react_native?.img}/>
            <SkillsCard skill_title={data?.skills?.bootstrap?.title} skill_logo={data?.skills?.bootstrap?.img}/>
            <SkillsCard skill_title={data?.skills?.swiper?.title} skill_logo={data?.skills?.swiper?.img}/>
            <SkillsCard skill_title={data?.skills?.redux?.title} skill_logo={data?.skills?.redux?.img}/>
            <SkillsCard skill_title={data?.skills?.electron?.title} skill_logo={data?.skills?.electron?.img}/>
        </div>
        <h2 className='text-[24px] text-[var(--yellow)] font-[600] mb-[32px] mt-[32px]'>{data?.skills?.backend}:</h2>
        <div className='grid grid-cols-5 gap-[20px] max-[820px]:grid-cols-4 max-[650px]:grid-cols-3 max-[450px]:grid-cols-2 max-[320px]:grid-cols-1'>
            <SkillsCard skill_title={data?.skills?.node?.title} skill_logo={data?.skills?.node?.img}/>
            {/* <SkillsCard skill_title={data?.skills?.express?.title} skill_logo={data?.skills?.express?.img}/> */}
            {/* <SkillsCard skill_title={data?.skills?.mongodb?.title} skill_logo={data?.skills?.mongodb?.img}/> */}
            {/* <SkillsCard skill_title={data?.skills?.py?.title} skill_logo={data?.skills?.py?.img}/> */}
            <SkillsCard skill_title={data?.skills?.php?.title} skill_logo={data?.skills?.php?.img}/>
            <SkillsCard skill_title={data?.skills?.laravel?.title} skill_logo={data?.skills?.laravel?.img}/>
            <SkillsCard skill_title={data?.skills?.mysql?.title} skill_logo={data?.skills?.mysql?.img}/>
        </div>
    </section>
  )
}

export default Skills
