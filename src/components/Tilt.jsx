import React from "react"
import ReactTilt from "react-tilt"

import {isTouch} from "../utils/motion"

// On touch devices tilt reacts to taps and looks broken, so render a plain box.
const Tilt = isTouch
  ? ({className, children}) => <div className={className}>{children}</div>
  : ReactTilt

export default Tilt
