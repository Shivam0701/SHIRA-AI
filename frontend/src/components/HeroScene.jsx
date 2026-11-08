import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';

/* Mouse-reactive camera rig */
function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef([0, 0]);

  React.useEffect(() => {
    const onMove = (e) => {
      mouse.current = [
        (e.clientX / window.innerWidth - 0.5) * 2,
        (e.clientY / window.innerHeight - 0.5) * -2,
      ];
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame((_, delta) => {
    camera.position.x += (mouse.current[0] * 1.2 - camera.position.x) * delta * 0.8;
    camera.position.y += (mouse.current[1] * 0.8 - camera.position.y) * delta * 0.8;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

/* Single floating glass prism */
function Prism({ position, rotation, scale, speed = 1, shape = 'oct' }) {
  const mesh = useRef();
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * speed * 0.15;
    mesh.current.rotation.y = state.clock.elapsedTime * speed * 0.22;
  });

  const geo = useMemo(() => {
    if (shape === 'oct')  return new THREE.OctahedronGeometry(1, 0);
    if (shape === 'ico')  return new THREE.IcosahedronGeometry(1, 0);
    if (shape === 'tet')  return new THREE.TetrahedronGeometry(1, 0);
    return new THREE.TorusGeometry(1, 0.35, 6, 8);
  }, [shape]);

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={mesh} geometry={geo} position={position} rotation={rotation} scale={scale}>
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.5}
          roughness={0.05}
          transmission={0.96}
          ior={1.5}
          chromaticAberration={0.04}
          color="#c8e8ff"
        />
      </mesh>
    </Float>
  );
}

/* Grid floor plane */
function GridFloor() {
  const mesh = useRef();
  useFrame((state) => {
    if (mesh.current) mesh.current.material.opacity = 0.18 + Math.sin(state.clock.elapsedTime * 0.5) * 0.04;
  });
  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.5, 0]}>
      <planeGeometry args={[40, 40, 24, 24]} />
      <meshBasicMaterial color="#0ea5e9" wireframe transparent opacity={0.18} />
    </mesh>
  );
}

/* Horizontal light streak lines */
function Streaks() {
  const group = useRef();
  useFrame((state) => {
    if (group.current) group.current.position.z = ((state.clock.elapsedTime * 0.6) % 10) - 5;
  });
  const lines = useMemo(() => Array.from({ length: 8 }, (_, i) => ({
    y: -3.5 + i * 1.0,
    x: (Math.random() - 0.5) * 18,
    len: 4 + Math.random() * 8,
  })), []);

  return (
    <group ref={group}>
      {lines.map((l, i) => (
        <mesh key={i} position={[l.x, l.y, -4]}>
          <planeGeometry args={[l.len, 0.012]} />
          <meshBasicMaterial color="#0ea5e9" transparent opacity={0.35} />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <color attach="background" args={['#08080c']} />
      <fog attach="fog" args={['#08080c', 12, 28]} />

      <ambientLight intensity={0.3} />
      <pointLight position={[6, 6, 4]} intensity={40} color="#0ea5e9" />
      <pointLight position={[-6, -4, 2]} intensity={20} color="#7c3aed" />
      <directionalLight position={[0, 8, 0]} intensity={1} color="#c8e8ff" />

      <Environment preset="city" />
      <Stars radius={80} depth={40} count={600} factor={3} saturation={0} fade speed={0.6} />

      <CameraRig />

      {/* Main feature prisms */}
      <Prism position={[-3.5, 1.2, -2]} rotation={[0.3, 0.5, 0.1]} scale={1.4} speed={0.7} shape="oct" />
      <Prism position={[3.8, -0.6, -3]} rotation={[0.8, 0.2, 0.4]} scale={1.1} speed={0.9} shape="ico" />
      <Prism position={[0.4, 2.4, -5]} rotation={[0.1, 0.9, 0.2]} scale={0.8} speed={1.1} shape="tet" />
      <Prism position={[-2.2, -1.8, -4]} rotation={[0.6, 0.3, 0.7]} scale={0.65} speed={1.3} shape="torus" />
      <Prism position={[2.2, 1.8, -1.5]} rotation={[0.2, 0.7, 0.3]} scale={0.5} speed={1.5} shape="tet" />
      <Prism position={[-0.8, -2.6, -2]} rotation={[0.4, 0.6, 0.2]} scale={0.45} speed={0.8} shape="oct" />

      <GridFloor />
      <Streaks />
    </Canvas>
  );
}
