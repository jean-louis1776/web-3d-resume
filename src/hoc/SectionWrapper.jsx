import React from "react"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { staggerContainer } from "../utils/motion"

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        whileInView="show"
        // Trigger by the section's top edge, not a % of its height: tall sections
        // (Experience) would otherwise reveal far too late.
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 hud-corners`}>
        <span className="hash-span select-none" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    )
  }

export default StarWrapper
