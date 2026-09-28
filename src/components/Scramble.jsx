import React, {useEffect, useRef} from "react"
import {motion} from "framer-motion"

// Narrow glyphs only: wide ones make the noise wrap past the heading.
const GLYPHS = "01#/\\[]{}=+*^?_-<>"
// Wait for the heading's own fade-in to get going before decoding.
const DELAY = 300
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches

// Heading text "decodes" from random glyphs. It starts on the same "show"
// signal framer-motion uses to reveal the section, so it never runs while the
// heading is still invisible (tall sections like Experience reveal late).
const Scramble = ({text}) => {
  const done = useRef(null)
  const noise = useRef(null)
  const started = useRef(false)
  const raf = useRef(0)
  const timer = useRef(0)

  const setText = (settled, rest) => {
    done.current.textContent = settled
    noise.current.textContent = rest
  }

  useEffect(() => {
    // Start scrambled so there is no flash of the final text.
    if (!reduced) setText("", text.replace(/\S/g, "_"))
    return () => {
      clearTimeout(timer.current)
      cancelAnimationFrame(raf.current)
    }
  }, [text])

  const run = (variant) => {
    if (variant !== "show" || started.current || reduced) return
    started.current = true
    const duration = Math.max(700, text.length * 60)

    timer.current = setTimeout(() => {
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1)
        const n = Math.floor(p * text.length)
        setText(
          text.slice(0, n),
          [...text.slice(n)]
            .map((c) => (c === " " ? " " : GLYPHS[(Math.random() * GLYPHS.length) | 0]))
            .join(""),
        )
        if (p < 1) raf.current = requestAnimationFrame(tick)
      }
      raf.current = requestAnimationFrame(tick)
    }, DELAY)
  }

  return (
    <motion.span
      className="relative inline-block"
      aria-label={text}
      // A dummy CSS var to animate: empty variants never fire onAnimationStart.
      variants={{hidden: {"--scramble": 0}, show: {"--scramble": 1}}}
      onAnimationStart={run}>
      {/* invisible copy keeps the final size, so the layout never jumps */}
      <span className="invisible" aria-hidden="true">{text}</span>
      <span className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <span ref={done}>{text}</span>
        <span ref={noise} className="scramble-noise"/>
      </span>
    </motion.span>
  )
}

export default Scramble
