import React from "react"
import {BrowserRouter} from "react-router-dom"

import {About, Contact, CV, Experience, Footer, Hero, Navbar, StarsCanvas, Tech, Works,} from "./components"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary min-h-screen">
          <Navbar/>
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Hero/>
          </div>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <CV/>

          <div className="relative z-0">
            <Contact/>
            <StarsCanvas/>
          </div>

          <Footer/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
