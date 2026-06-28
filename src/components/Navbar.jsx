import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"

import {styles} from "../styles"
import {navLinks} from "../constants"
import {close, logo, menu} from "../assets"

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  // Lock background scroll while the fullscreen mobile menu is open
  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [toggle])

  // The CV section lets the visitor choose EN / RU, so the nav link just
  // scrolls there (handled by the anchor href) instead of auto-downloading.
  const handleLinkClick = (link) => {
    setActive(link.title);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 sticky top-0 z-20 bg-primary select-none`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 relative z-50"
          onClick={() => {
            setActive("")
            setToggle(false)
            window.scrollTo(0, 0)
          }}>
          <img
            src={logo}
            alt="logo"
            className="w-[7.5rem] h-14 object-contain"
          />
          <p className="text-white text-[21px] font-bold cursor-pointer flex">
            <span className="sm:block hidden">| Frontend Developer</span>
          </p>
        </Link>

        <ul className="list-none hidden min-[900px]:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => handleLinkClick(link)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="min-[900px]:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt={toggle ? "close menu" : "menu"}
            className="w-[28px] h-[28px] object-contain cursor-pointer relative z-50"
            onClick={() => setToggle(!toggle)}
          />

          {/* Fullscreen mobile menu overlay */}
          <div
            className={`fixed inset-0 z-40 bg-primary/95 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-300 ${
              toggle
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}>
            <ul className="list-none flex flex-col items-center gap-3 w-full px-10">
              {navLinks.map((link, index) => (
                <li
                  key={link.id}
                  style={{
                    transitionDelay: toggle ? `${index * 60 + 80}ms` : "0ms",
                  }}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } w-full text-center cursor-pointer transition-all duration-300 ${
                    toggle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  onClick={() => {
                    setToggle(false)
                    handleLinkClick(link)
                  }}>
                  <a
                    href={`#${link.id}`}
                    className="block w-full py-3 text-[30px] font-bold hover:text-white transition-colors duration-200">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
