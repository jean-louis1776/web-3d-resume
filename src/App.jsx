import React from "react"
import {BrowserRouter} from "react-router-dom"
import {MotionConfig} from "framer-motion"

import {About, Contact, CV, Experience, Footer, Hero, Navbar, StarsCanvas, Tech, Works,} from "./components"
import CursorFX from "./components/CursorFX"

const App = () => {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <div className="relative z-0 bg-primary min-h-screen">
          <Navbar/>
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Hero/>
          </div>
          <div className="bg-texture">
            <About/>
            <Experience/>
            <Tech/>
            <Works/>
            <CV/>
          </div>

          <div className="relative z-0">
            <Contact/>
            <StarsCanvas/>
          </div>

          <Footer/>
        </div>
        <CursorFX/>
      </BrowserRouter>
    </MotionConfig>
  )
}

export default App
