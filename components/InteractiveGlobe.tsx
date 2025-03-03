import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere } from "@react-three/drei"
import type * as THREE from "three"

const Globe = () => {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    meshRef.current.rotation.y += 0.002
  })

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <meshStandardMaterial color="#4B9CD3" opacity={0.7} transparent wireframe />
    </Sphere>
  )
}

const Marker = ({ lat, lon }: { lat: number; lon: number }) => {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  const x = -1 * Math.sin(phi) * Math.cos(theta)
  const z = Math.sin(phi) * Math.sin(theta)
  const y = Math.cos(phi)

  return (
    <mesh position={[x, y, z]}>
      <sphereGeometry args={[0.02, 16, 16]} />
      <meshBasicMaterial color="#FF4136" />
    </mesh>
  )
}

export const InteractiveGlobe = () => {
  const partnerLocations = [
    { lat: 40.7128, lon: -74.006 }, // New York
    { lat: 51.5074, lon: -0.1278 }, // London
    { lat: 35.6762, lon: 139.6503 }, // Tokyo
    { lat: 28.6139, lon: 77.209 }, // New Delhi
    { lat: -33.8688, lon: 151.2093 }, // Sydney
  ]

  return (
    <Canvas camera={{ position: [0, 0, 2.5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Globe />
      {partnerLocations.map((loc, index) => (
        <Marker key={index} lat={loc.lat} lon={loc.lon} />
      ))}
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

