import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-8'>
      {technologies.map((technology) => (
        <div
          className='w-28 h-28 bg-tertiary rounded-2xl p-5 flex items-center justify-center shadow-card'
          key={technology.name}
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className='w-full h-full object-contain'
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
