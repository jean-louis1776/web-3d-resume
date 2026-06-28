import React from "react"
import Tilt from "react-tilt"
import {motion} from "framer-motion"

import {me} from "../assets"
import {services} from "../constants"
import {SectionWrapper} from "../hoc"
import {styles} from "../styles"
import {fadeIn, textVariant} from "../utils/motion"

const ServiceCard = ({index, title, icon}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.25, 0.75)} className="xs:w-[250px] w-full">
      <Tilt className="w-full" options={{max: 25, scale: 1.05, speed: 450}}>
        <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card select-none transition-transform duration-300 hover:-translate-y-2">
          <div
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={title} className="w-16 h-16 object-contain"/>

            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        <p className="mt-4 text-secondary text-[17px] min-[1000px]:max-w-lg w-full leading-[30px]">
          Hi! I’m Ilya, a Frontend Developer with 4+ years of experience and a deep specialization in the
          TypeScript ecosystem. I build performant interfaces for high-load products and real-time applications —
          primarily with React 19 and the Vue 3 / Nuxt 3 stack.
          <br/><br/>
          I’ve shipped frontend for products with audiences of 500K+, such as Hamster Kombat 2, where I focused
          on architecture and performance under heavy load. More recently, as the sole frontend developer on a
          real-time multiplayer game (Mafia), I took the client from prototype to MVP and closed beta — designing a
          resilient WebSocket layer, a complex game state machine, and an end-to-end type-safe API integration.
          <br/><br/>
          My core strengths are real-time state synchronization, type-safe API integration, and UX optimization for
          mobile webviews and Telegram Mini Apps. I graduated from GeekBrains (Fullstack JavaScript) and have
          delivered 35+ projects (check my GitHub!), from fintech interfaces like PassimPay to interactive gaming
          platforms.
          <br/><br/>
          I’m a strong team player, comfortable in remote teams — available for remote work and open to relocation
          (Georgia).
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
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
