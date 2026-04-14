import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { live_link } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.25, 0.75)}
      className='sm:w-[360px] w-full'
    >
      <article className='project-card h-full rounded-3xl overflow-hidden'>
        <div className='relative w-full h-[220px] overflow-hidden'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover project-card-image'
          />

          <div className='project-card-overlay' />

          <div className='absolute top-4 left-4'>
            <span className='project-chip'>Project</span>
          </div>
        </div>

        <div className='p-6 flex flex-col gap-5 h-[calc(100%-220px)]'>
          <div>
            <h3 className='text-white font-bold text-[24px] leading-tight'>{name}</h3>
            <p className='mt-3 text-secondary text-[14px] leading-7 project-description'>
              {description}
            </p>
          </div>

          <div className='project-footer mt-auto'>
            <span className='project-footer-label'>Built for production-minded work</span>
            <div className='project-footer-links'>
              <button
                type='button'
                onClick={() => window.open(source_code_link, "_blank")}
                className='project-link-button'
              >
                Source
              </button>
              {live_demo_link && (
                <button
                  type='button'
                  onClick={() => window.open(live_demo_link, "_blank")}
                  className='project-link-button project-link-button-primary'
                >
                  Live Demo
                </button>
              )}
            </div>
          </div>
        </div>
      </article>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-16 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
