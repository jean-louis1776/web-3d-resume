import React from "react"
import Tilt from "react-tilt"

import {me} from "../assets"
import {services} from "../constants"
import {SectionWrapper} from "../hoc"
import {styles} from "../styles"
import {fadeIn, textVariant} from "../utils/motion"

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card select-none">
        <div
          options={{max: 45, scale: 1, speed: 450}}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>

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
          Hi! I’m Ilya, a Frontend Developer with over 4 years of experience in web development. I specialize in
          building high-performance Telegram Mini Apps (TMA) and complex web interfaces using the Nuxt 3 and React
          ecosystems.
          <br/><br/>
          My professional background includes working on global-scale products, such as Hamster Kombat 2, where I
          focused on frontend architecture and performance optimization under extreme loads.
          <br/><br/>
          I graduated from GeekBrains IT University (Full Stack JavaScript Development), but my core passion lies in
          frontend engineering. I have successfully delivered over 35 projects (check my GitHub!), ranging from fintech
          solutions like PassimPay to interactive gaming platforms.
          <br/><br/>
          I am a strong team player who thrives in remote environments and values continuous growth through
          collaboration with senior colleagues.
        </p>

        <Tilt className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
          <div className="xs:w-[350px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div
              className="bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden">
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
