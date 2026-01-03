import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { community } from "../constants";

const CommunityCard = ({ index, title, company_name, icon, iconBg, date, points }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="bg-[#1d1836] p-8 rounded-2xl w-full hover:scale-[1.02] transition-transform duration-300"
  >
    <div className="flex items-start gap-4 mb-6">
      <div 
        className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: iconBg }}
      >
        <img src={icon} alt={company_name} className="w-10 h-10 object-contain" />
      </div>
      <div className="flex-1">
        <h3 className="text-white font-bold text-[20px] sm:text-[24px] mb-1">
          {title}
        </h3>
        <p className="text-[#915EFF] font-semibold text-[16px] sm:text-[18px] mb-2">
          {company_name}
        </p>
        <p className="text-secondary text-[14px] font-medium">
          {date}
        </p>
      </div>
    </div>

    <div className="space-y-3">
      {points.map((point, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <span className="text-[#915EFF] text-[20px] mt-1 flex-shrink-0">•</span>
          <p className="text-[#aaa6c3] text-[14px] sm:text-[16px] leading-relaxed">
            {point}
          </p>
        </div>
      ))}
    </div>
  </motion.div>
);

const Community = () => {
  return (
    <div className="mt-12 bg-[#100d25] rounded-[20px]">
      <div className={`bg-[#1d1836] rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Making an impact</p>
          <h2 className={styles.sectionHeadText}>Community Involvement.</h2>
        </motion.div>
      </div>
      
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-col gap-7`}>
        {community.map((item, index) => (
          <CommunityCard key={`community-${index}`} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Community, "community");