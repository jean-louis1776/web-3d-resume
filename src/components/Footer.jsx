import React from "react"
import {motion} from "framer-motion"

import {logo} from "../assets"
import {myLinks} from "../constants"

const Footer = () => {
  return (
    <footer className="relative bg-black-200 sm:px-16 px-6 sm:py-12 py-10 mt-20 select-none">
      <motion.div
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.6}}
        className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <img src={logo} alt="logo" className="w-36"/>

        <div className="flex flex-wrap items-center justify-center gap-5">
          {myLinks.map((contact) => (
            <a
              href={contact.link}
              key={contact.link}
              target="_blank"
              rel="noreferrer"
              aria-label={contact.subtitle}
              className="w-11 h-11 rounded-full bg-tertiary flex items-center justify-center border border-transparent hover:border-[#915eff] hover:-translate-y-1 transition-all duration-300">
              <img src={contact.icon} alt={contact.subtitle} className="w-5 h-5 object-contain"/>
            </a>
          ))}
        </div>

        <div className="w-full max-w-md h-px bg-secondary/20"/>

        <p className="text-secondary text-[15px] leading-[24px] text-center">
          {new Date().getFullYear()} &copy; ILALEX — Ilya Aleksin. All rights reserved.
        </p>
      </motion.div>
    </footer>
  )
}

export default Footer
