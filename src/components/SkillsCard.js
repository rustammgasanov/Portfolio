import React from 'react';

const SkillsCard = ({ skill_title, skill_logo }) => {
  return (
    <div data-aos="zoom-out-up" className="relative flex justify-center gap-[10px] p-[5px_16px] border border-white rounded-[16px]">
      <img className="w-[20px] h-[20px]" src={skill_logo} alt={skill_title} />
      <p className="text-white whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px] group-hover:whitespace-normal group-hover:bg-black/80 group-hover:p-[5px] group-hover:rounded-[8px] group-hover:absolute group-hover:top-full group-hover:left-1/2 group-hover:transform group-hover:-translate-x-1/2 group-hover:z-10">
        {skill_title}
      </p>
    </div>
  );
};

export default SkillsCard;
