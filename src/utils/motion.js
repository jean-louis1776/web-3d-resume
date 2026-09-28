// Phones and tablets: no custom cursor, no tilt, no entrance animations.
// ponytail: touch laptops also count as touch (any-pointer: coarse), they lose the effects too.
export const isTouch =
  !matchMedia("(hover: hover) and (pointer: fine)").matches ||
  matchMedia("(any-pointer: coarse)").matches

// Static variants: elements render in their final state right away.
const still = {hidden: {}, show: {}}

export const textVariant = (delay) => {
  if (isTouch) return still
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  }
}

export const fadeIn = (direction, type, delay, duration) => {
  if (isTouch) return still
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  }
}

export const zoomIn = (delay, duration) => {
  if (isTouch) return still
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  }
}

export const slideIn = (direction, type, delay, duration) => {
  if (isTouch) return still
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  }
}

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  }
}
