import React, {useEffect, useRef} from "react"

// Narrow glyphs only: wide ones make the noise wrap past the heading.
const GLYPHS = "01#/\\[]{}=+*^?_-<>"
const DURATION = 800
const DELAY = 250

// Heading text "decodes" from random glyphs the first time it scrolls into view.
const Scramble = ({text}) => {
  const done = useRef(null)
  const noise = useRef(null)

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const el = done.current.parentNode
    let raf, timer

    const run = () => {
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / DURATION, 1)
        const n = Math.floor(p * text.length)
        done.current.textContent = text.slice(0, n)
        noise.current.textContent = [...text.slice(n)]
          .map((c) => (c === " " ? " " : GLYPHS[(Math.random() * GLYPHS.length) | 0]))
          .join("")
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      timer = setTimeout(run, DELAY)
    }, {threshold: 0.5})

    // Start scrambled so there is no flash of the final text.
    done.current.textContent = ""
    noise.current.textContent = text.replace(/\S/g, "_")
    io.observe(el)

    return () => {
      io.disconnect()
      clearTimeout(timer)
      cancelAnimationFrame(raf)
      done.current.textContent = text
      noise.current.textContent = ""
    }
  }, [text])

  return (
    <span className="relative inline-block" aria-label={text}>
      {/* invisible copy keeps the final size, so the layout never jumps */}
      <span className="invisible" aria-hidden="true">{text}</span>
      <span className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <span ref={done}>{text}</span>
        <span ref={noise} className="scramble-noise"/>
      </span>
    </span>
  )
}

export default Scramble
