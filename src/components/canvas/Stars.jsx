import { useState, useRef, useEffect, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Preload } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm"
import { useInView } from "framer-motion"

import { reducedMotion } from "../../utils/motion"

// Mouse in -1..1, from window: the canvas sits behind the content and never gets pointer events.
const pointer = { x: 0, y: 0 }

// 3 layers with their own twinkle phase and parallax depth, 5000 points total like before.
const LAYERS = [
  { count: 2000, depth: 0.02, phase: 0 },
  { count: 1800, depth: 0.04, phase: 2.1 },
  { count: 1200, depth: 0.07, phase: 4.2 },
]

const Layer = ({ count, depth, phase }) => {
  const group = useRef()
  const points = useRef()
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(count * 3), { radius: 1.2 })
  )

  useFrame((state, delta) => {
    if (reducedMotion) return
    const p = points.current
    p.rotation.x -= delta / 10
    p.rotation.y -= delta / 15

    // twinkle: each layer breathes out of phase with the others
    p.material.opacity = 0.8 + 0.2 * Math.sin(state.clock.elapsedTime * 1.3 + phase)

    // parallax: nearer layers follow the mouse further
    const k = Math.min(1, delta * 2)
    group.current.position.x += (pointer.x * depth - group.current.position.x) * k
    group.current.position.y += (pointer.y * depth - group.current.position.y) * k
  })

  return (
    <group ref={group}>
      <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={points} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#c9b8ff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
      </group>
    </group>
  )
}

const StarsCanvas = () => {
  const box = useRef()
  // Don't burn GPU on the starfield while it's off-screen.
  const inView = useInView(box)

  useEffect(() => {
    const onMove = (e) => {
      pointer.x = (e.clientX / innerWidth) * 2 - 1
      pointer.y = 1 - (e.clientY / innerHeight) * 2
    }
    addEventListener("pointermove", onMove)
    return () => removeEventListener("pointermove", onMove)
  }, [])

  return (
    <div ref={box} className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }} frameloop={inView ? "always" : "never"}>
        <Suspense fallback={null}>
          {LAYERS.map((l) => (
            <Layer key={l.phase} {...l} />
          ))}
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
