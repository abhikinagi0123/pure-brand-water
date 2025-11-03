import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Float, Sparkles } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

function PlasticBottle() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group>
        {/* Clear Bottle Body with blue tint */}
        <mesh position={[0, 0, 0]} castShadow>
          <cylinderGeometry args={[0.8, 0.9, 3, 32]} />
          <meshPhysicalMaterial
            color="#e0f2ff"
            transparent
            opacity={0.4}
            roughness={0.05}
            metalness={0.05}
            clearcoat={1}
            clearcoatRoughness={0.05}
            transmission={0.9}
            thickness={0.5}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Bottle Neck */}
        <mesh position={[0, 1.8, 0]} castShadow>
          <cylinderGeometry args={[0.3, 0.5, 0.6, 32]} />
          <meshPhysicalMaterial
            color="#e0f2ff"
            transparent
            opacity={0.4}
            roughness={0.05}
            metalness={0.05}
            clearcoat={1}
            clearcoatRoughness={0.05}
            transmission={0.9}
            thickness={0.5}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Blue Bottle Cap */}
        <mesh position={[0, 2.3, 0]} castShadow>
          <cylinderGeometry args={[0.35, 0.35, 0.4, 32]} />
          <meshStandardMaterial 
            color="#1e3a5f" 
            roughness={0.3} 
            metalness={0.6}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Cap ridges for detail */}
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} position={[0, 2.15 + i * 0.08, 0]} castShadow>
            <torusGeometry args={[0.36, 0.02, 8, 32]} />
            <meshStandardMaterial color="#2c5282" roughness={0.3} metalness={0.7} />
          </mesh>
        ))}

        {/* White Label with brand text */}
        <mesh position={[0, 0, 0.82]} rotation={[0, 0, 0]}>
          <planeGeometry args={[2, 1.5]} />
          <meshStandardMaterial 
            color="#ffffff" 
            roughness={0.4}
            metalness={0.1}
          />
        </mesh>

        {/* Brand Text - "ONE PURE DROP" */}
        <mesh position={[0, 0.3, 0.83]}>
          <planeGeometry args={[1.6, 0.8]} />
          <meshStandardMaterial 
            color="#1e3a5f"
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Water inside bottle with blue tint */}
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.75, 0.85, 2.4, 32]} />
          <meshPhysicalMaterial
            color="#bfdbfe"
            transparent
            opacity={0.5}
            roughness={0}
            metalness={0}
            transmission={0.85}
            thickness={1}
          />
        </mesh>

        {/* Bottle ridges/grooves for realistic detail */}
        {[-0.8, 0.8].map((y, i) => (
          <mesh key={i} position={[0, y, 0]}>
            <torusGeometry args={[0.82, 0.03, 16, 32]} />
            <meshPhysicalMaterial
              color="#e0f2ff"
              transparent
              opacity={0.3}
              roughness={0.05}
              metalness={0.05}
              clearcoat={1}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export default function BottleScene3D() {
  return (
    <div className="w-full h-full">
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true }}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[5, 2, 5]} fov={50} />
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={4}
            maxDistance={10}
            autoRotate
            autoRotateSpeed={1.5}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 3}
          />
          
          {/* Enhanced lighting setup for clear bottle */}
          <ambientLight intensity={0.8} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#60a5fa" />
          <pointLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={0.8}
            castShadow
          />
          
          <PlasticBottle />
          
          {/* Blue sparkles to match water theme */}
          <Sparkles
            count={30}
            scale={8}
            size={2}
            speed={0.3}
            opacity={0.4}
            color="#60a5fa"
          />
          
          {/* Ground plane for shadows */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
            <planeGeometry args={[20, 20]} />
            <shadowMaterial opacity={0.2} />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}