import React, {useEffect, useRef} from "react"

import {isTouch} from "../utils/motion"

// Interactive targets: the reticle snaps to their bounds, the glow collapses.
const TARGETS = "a, button, [data-cursor]"
// Over text fields the native I-beam comes back and the custom cursor hides.
const TEXT = "input, textarea, select, [contenteditable]"
const PAD = 8
const FREE = 26

const CursorFX = () => {
  const root = useRef(null)

  useEffect(() => {
    // Mouse only, and not for people who asked for less motion.
    if (isTouch || matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const el = root.current
    let x = innerWidth / 2, y = innerHeight / 2
    let gx = x, gy = y
    let fx = x - FREE / 2, fy = y - FREE / 2, fw = FREE, fh = FREE
    let target = null
    let raf

    const pick = (node) => {
      target = node?.closest?.(TARGETS) || null
      el.classList.toggle("is-text", !!node?.closest?.(TEXT))
    }
    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      pick(e.target)
      // Local pointer position for the card border spotlight.
      const card = e.target.closest?.("[data-cursor]")
      if (card) {
        const r = card.getBoundingClientRect()
        card.style.setProperty("--mx", `${x - r.left}px`)
        card.style.setProperty("--my", `${y - r.top}px`)
      }
      el.classList.add("is-visible")
    }
    const onLeave = () => el.classList.remove("is-visible")
    const onScroll = () => pick(document.elementFromPoint(x, y))
    const onDown = () => el.classList.add("is-pressed")
    const onUp = () => el.classList.remove("is-pressed")
    // Native link/image dragging stops mousemove, freezing the reticle mid-way.
    const onDragStart = (e) => e.preventDefault()

    document.documentElement.classList.add("cursor-fx-on")

    const tick = () => {
      gx += (x - gx) * 0.12
      gy += (y - gy) * 0.12

      let tx = x - FREE / 2, ty = y - FREE / 2, tw = FREE, th = FREE
      if (target && target.isConnected) {
        const r = target.getBoundingClientRect()
        tx = r.left - PAD
        ty = r.top - PAD
        tw = r.width + PAD * 2
        th = r.height + PAD * 2
      }
      const k = target ? 0.2 : 0.35
      fx += (tx - fx) * k
      fy += (ty - fy) * k
      fw += (tw - fw) * k
      fh += (th - fh) * k

      el.classList.toggle("is-locked", !!target)
      el.style.setProperty("--x", `${x}px`)
      el.style.setProperty("--y", `${y}px`)
      el.style.setProperty("--gx", `${gx}px`)
      el.style.setProperty("--gy", `${gy}px`)
      el.style.setProperty("--fx", `${fx}px`)
      el.style.setProperty("--fy", `${fy}px`)
      el.style.setProperty("--fw", `${fw}px`)
      el.style.setProperty("--fh", `${fh}px`)
      raf = requestAnimationFrame(tick)
    }

    addEventListener("mousemove", onMove, {passive: true})
    addEventListener("scroll", onScroll, {passive: true})
    addEventListener("mousedown", onDown)
    addEventListener("mouseup", onUp)
    addEventListener("dragstart", onDragStart)
    document.documentElement.addEventListener("mouseleave", onLeave)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      removeEventListener("mousemove", onMove)
      removeEventListener("scroll", onScroll)
      removeEventListener("mousedown", onDown)
      removeEventListener("mouseup", onUp)
      removeEventListener("dragstart", onDragStart)
      document.documentElement.removeEventListener("mouseleave", onLeave)
      document.documentElement.classList.remove("cursor-fx-on")
    }
  }, [])

  return (
    <div ref={root} className="cursor-fx" aria-hidden="true">
      <div className="cursor-fx__grid"/>
      <div className="cursor-fx__glow"><span/></div>
      <div className="cursor-fx__frame">
        <i/><i/><i/><i/>
      </div>
      <div className="cursor-fx__dot"/>
    </div>
  )
}

export default CursorFX
