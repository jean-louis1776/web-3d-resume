import React from "react"
import Tilt from "react-tilt"
import { motion } from "framer-motion"

import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { styles } from "../styles"

const TechCard = ({ index, name, icon }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.1, 0.6)}>
      <Tilt className="w-28 h-28" options={{ max: 25, scale: 1.1, speed: 450 }}>
        <div
          className="w-full h-full green-pink-gradient p-[1px] rounded-full shadow-card select-none transition-transform duration-300 hover:-translate-y-1">
          <div
            className="bg-tertiary rounded-full w-full h-full flex justify-evenly items-center flex-col">
            <img src={icon} alt={name} className="w-16 h-16 object-contain" />
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My tools</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies.
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-6 xs:gap-10 mt-12 xs:mt-20">
        {technologies.map((technology, index) => (
          <TechCard index={index} name={technology.name} icon={technology.icon} key={technology.name} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "")
