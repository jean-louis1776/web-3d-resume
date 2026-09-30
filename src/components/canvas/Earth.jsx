import React, { Suspense, useRef } from "react"
import { useInView } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { AdditiveBlending, BackSide } from "three"

import CanvasLoader from "../Loader"
import { reducedMotion } from "../../utils/motion"

// Thin halo ring on a slightly bigger back-faced sphere, only around the silhouette.
const atmosphere = {
  uniforms: {},
  vertexShader: `
    varying vec3 vNormal;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  fragmentShader: `
    varying vec3 vNormal;
    void main() {
      // back faces: d = 0 at the halo's outer edge, -1 at the disk center.
      // Peak just outside the clouds (d ~ -0.5), zero over the planet so it never shows through cloud gaps.
      float d = dot(vNormal, vec3(0.0, 0.0, 1.0));
      float i = smoothstep(-0.7, -0.45, d) * (1.0 - smoothstep(-0.4, 0.0, d));
      gl_FragColor = vec4(0.57, 0.37, 1.0, 1.0) * i * 0.45; // #915eff, 0.45 = strength
    }`,
}

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf")

  return (
    <>
      <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
      {/* clouds mesh radius is ~0.88 * 2.5 = 2.2 */}
      <mesh scale={2.55}>
        <sphereGeometry args={[1, 64, 64]} />
        <shaderMaterial
          args={[atmosphere]}
          side={BackSide}
          blending={AdditiveBlending}
          transparent
          depthWrite={false}
        />
      </mesh>
    </>
  )
}

const EarthCanvas = () => {
  const ref = useRef()
  // autoRotate renders every frame anyway, so run "always" on-screen and pause off-screen
  // ("demand" would never wake up again after "never").
  const inView = useInView(ref)

  return (
    <Canvas
      ref={ref}
      frameloop={inView ? "always" : "never"}
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={!reducedMotion}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas
