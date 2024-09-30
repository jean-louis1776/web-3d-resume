import React from "react"
import Tilt from "react-tilt"

import { me } from "../assets"
import { services } from "../constants"
import { SectionWrapper } from "../hoc"
import { styles } from "../styles"
import { fadeIn, textVariant } from "../utils/motion"

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card select-none">
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <div
        variants={fadeIn("", "", 0.1, 1)}
        className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        <p className="mt-4 text-secondary text-[17px] min-[1000px]:max-w-lg w-full leading-[30px]">
          Hey! I'm Ilya. I'm 27 years old and I'm from Volgograd, Russia. I have
          been actively engaged in web development for over 3 years and
          constantly study new technologies and try to apply them. Studied at
          GeekBrains IT University at the faculty "Full Stack JavaScript
          development". <br />
          <br /> I can and love to work in a team. I can organize myself for
          remote work. The experience gained is not just in the treasury of
          skills, but is actively used in product development. I like to learn
          from more experienced colleagues, in addition to self-study. <br />
          <br /> There are already over 35 non-commercial projects on my GitHub.
          Also I plan to improve my skills in the field of mobile development
          using the React Native framework. Also I love making 8-bit games in
          PICO-8 engine (Lua).
        </p>

        <Tilt className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
          <div className="xs:w-[350px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div className="bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden">
              <img
                src={me}
                alt="MyPhoto"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </Tilt>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
