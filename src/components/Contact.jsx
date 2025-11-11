import React from "react"

import {styles} from "../styles"
import {EarthCanvas} from "./canvas"
import {SectionWrapper} from "../hoc"
import {myLinks} from "../constants/index.js";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <p>If you are interested in collaborating with me, please contact me using the links below.</p>

        <div className='flex flex-col gap-6 mt-4'>
          {myLinks.map((contact) => (
            <a href={contact.link} key={contact.link} target='_blank' rel='noreferrer'>
              <button
                className="bg-tertiary w-full flex items-center justify-center gap-3 py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary text-[18px] whitespace-nowrap">
                <img src={contact.icon} alt={contact.title} className="h-6 w-6 text-white"/>
                {contact.title}
                <span className={contact.subtitle_color}>{contact.subtitle}</span>
              </button>
            </a>
          ))}
        </div>
      </div>

      <div className="xl:flex-1 xl:h-[450px] md:h-[550px] h-[350px]">
        <EarthCanvas/>
      </div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
