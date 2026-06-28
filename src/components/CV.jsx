import React from "react"
import {motion} from "framer-motion"

import {styles} from "../styles"
import {SectionWrapper} from "../hoc"
import {fadeIn, textVariant} from "../utils/motion"
import {CVDuncan, myWords} from "../constants"
import CV_EN from "../assets/CV_Ilya_Aleksin_EN.pdf"
import CV_RU from "../assets/CV_Ilya_Aleksin_RU.pdf"

const FlagUK = (props) => (
  <svg viewBox="0 0 60 30" {...props}>
    <clipPath id="uk-s">
      <path d="M0,0 v30 h60 v-30 z"/>
    </clipPath>
    <clipPath id="uk-t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
    </clipPath>
    <g clipPath="url(#uk-s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-t)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
)

const FlagRU = (props) => (
  <svg viewBox="0 0 60 30" {...props}>
    <rect width="60" height="10" fill="#fff"/>
    <rect y="10" width="60" height="10" fill="#0039A6"/>
    <rect y="20" width="60" height="10" fill="#D52B1E"/>
  </svg>
)

const DownloadIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)

const CvButton = ({href, fileName, Flag, title, subtitle}) => (
  <a href={href} download={fileName} className="w-full">
    <button
      className="group w-full flex items-center gap-3 xs:gap-4 bg-tertiary py-3 px-4 xs:px-5 rounded-xl outline-none
                 text-white shadow-md shadow-primary border border-transparent
                 hover:border-[#915eff] hover:-translate-y-0.5 transition-all duration-300">
      <Flag className="w-8 h-5 xs:w-9 xs:h-[22px] rounded-[3px] shadow-sm shrink-0"/>

      <span className="flex flex-col items-start leading-tight flex-1 min-w-0">
        <span className="font-bold text-[15px] xs:text-[17px] whitespace-nowrap">{title}</span>
        <span className="text-secondary text-[11px] xs:text-[12px] font-medium whitespace-nowrap">{subtitle}</span>
      </span>

      <DownloadIcon className="w-5 h-5 text-secondary group-hover:text-[#915eff]
                               group-hover:translate-y-0.5 transition-all duration-300 shrink-0"/>
    </button>
  </a>
)

const Card = ({text, name}) => (
  <div className="bg-black-200 p-5 xs:p-10 rounded-3xl xs:w-[320px] w-full select-none">
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{text}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
        </div>
      </div>
    </div>
  </div>
)

const CV = () => {
  return (
    <div className="bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>For employers</p>
          <h2 className={styles.sectionHeadText}>My CV.</h2>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("up", "spring", 0.1, 1)}
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center select-none`}>
        {myWords.map((word) => (
          <Card key={word.name} {...word}/>
        ))}

        <div className="bg-black-200 p-5 xs:p-10 rounded-3xl xs:w-[640px] w-full">
          <div className="flex min-[850px]:flex-row flex-col justify-around items-center gap-8 xs:gap-10">
            <img src={CVDuncan} alt="CVDuncan" className="w-[200px] xs:w-[250px] select-none"/>

            <div className="flex flex-col gap-4 w-full max-w-[300px]">
              <CvButton
                href={CV_EN}
                fileName="CV_Ilya_Aleksin_EN.pdf"
                Flag={FlagUK}
                title="Download CV"
                subtitle="English · PDF"
              />
              <CvButton
                href={CV_RU}
                fileName="CV_Ilya_Aleksin_RU.pdf"
                Flag={FlagRU}
                title="Скачать резюме"
                subtitle="Русский · PDF"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(CV, "cv")
