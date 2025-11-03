import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

function Bottle() {
  return (
    <group>
      {/* Bottle Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.8, 0.9, 4, 32]} />
        <meshPhysicalMaterial
          color="#ff3333"
          transparent
          opacity={0.85}
          roughness={0.1}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      
      {/* Bottle Neck */}
      <mesh position={[0, 2.5, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.4, 1, 32]} />
        <meshPhysicalMaterial
          color="#ff3333"
          transparent
          opacity={0.85}
          roughness={0.1}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      
      {/* Bottle Cap */}
      <mesh position={[0, 3.2, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.35, 0.4, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
      
      {/* Label */}
      <mesh position={[0, 0, 0.91]} rotation={[0, 0, 0]}>
        <planeGeometry args={[2, 1.5]} />
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

export default function BottleScene3D() {
  return (
    <div className="w-full h-full">
      <Canvas shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[5, 2, 5]} fov={50} />
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={5}
            maxDistance={15}
            autoRotate
            autoRotateSpeed={2}
          />
          
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <spotLight
            position={[-10, 10, -5]}
            angle={0.3}
            penumbra={1}
            intensity={0.5}
            castShadow
          />
          
          <Bottle />
          
          <Environment preset="studio" />
          
          {/* Ground plane for shadows */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]} receiveShadow>
            <planeGeometry args={[20, 20]} />
            <shadowMaterial opacity={0.3} />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}
