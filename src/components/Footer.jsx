import React from "react"

import { logo } from "../assets"

const Footer = () => {
  return (
    <div className="bg-black-200 sm:px-16 px-6 sm:py-12 py-10 min-h-[250px] mt-20">
      <img src={logo} alt="logo" className="w-36 m-auto" />

      <p className="text-secondary text-[17px] leading-[30px] text-center absolute bottom-8 left-0 right-0 mx-auto select-none">
        {new Date().getFullYear()} &copy; ILALEX. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
