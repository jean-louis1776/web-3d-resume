import React from "react"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { staggerContainer } from "../utils/motion"

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </section>
    )
  }

export default StarWrapper
