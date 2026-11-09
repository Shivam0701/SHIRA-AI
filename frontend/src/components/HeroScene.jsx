import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const isMobileDevice = () =>
  typeof window !== 'undefined' &&
  (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 768);

/* Mouse-reactive camera — desktop only */
function CameraRig({ enabled }) {
  const { camera } = useThree();
  const mouse = useRef([0, 0]);

  React.useEffect(() => {
    if (!enabled) return;
    const fn = (e) => {
      mouse.current = [
        (e.clientX / window.innerWidth - 0.5) * 2,
        (e.clientY / window.innerHeight - 0.5) * -2,
      ];
    };
    window.addEventListener('mousemove', fn, { passive: true });
    return () => window.removeEventListener('mousemove', fn);
  }, [enabled]);

  useFrame((_, delta) => {
    if (!enabled) return;
    camera.position.x += (mouse.current[0] * 1.2 - camera.position.x) * delta * 0.8;
    camera.position.y += (mouse.current[1] * 0.8 - camera.position.y) * delta * 0.8;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

/* Glass prism — MeshStandardMaterial (no HDR needed, renders instantly) */
function Prism({ position, rotation, scale, speed = 1, shape = 'oct', mobile }) {
  const mesh = useRef();

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * speed * 0.15;
    mesh.current.rotation.y = state.clock.elapsedTime * speed * 0.22;
  });

  const geo = useMemo(() => {
    if (shape === 'oct') return new THREE.OctahedronGeometry(1, 0);
    if (shape === 'ico') return new THREE.IcosahedronGeometry(1, 0);
    if (shape === 'tet') return new THREE.TetrahedronGeometry(1, 0);
    return new THREE.TorusGeometry(1, 0.35, 6, 8);
  }, [shape]);

  return (
    <Float speed={speed * (mobile ? 0.6 : 1)} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={mesh} geometry={geo} position={position} rotation={rotation} scale={scale}>
        <meshStandardMaterial
          color="#a8d8f0"
          metalness={0.3}
          roughness={0.1}
          transparent
          opacity={mobile ? 0.55 : 0.72}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

/* Animated grid floor */
function GridFloor() {
  const mesh = useRef();
  useFrame((state) => {
    if (mesh.current)
      mesh.current.material.opacity = 0.14 + Math.sin(state.clock.elapsedTime * 0.5) * 0.04;
  });
  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.5, 0]}>
      <planeGeometry args={[40, 40, 20, 20]} />
      <meshBasicMaterial color="#0ea5e9" wireframe transparent opacity={0.14} />
    </mesh>
  );
}

function ReadySignal({ onReady }) {
  const fired = useRef(false);
  useFrame(() => {
    if (!fired.current) { fired.current = true; onReady?.(); }
  });
  return null;
}

export default function HeroScene({ onReady }) {
  const mobile = isMobileDevice();

  return (
    <Canvas
      camera={{ position: [0, 0, mobile ? 11 : 9], fov: mobile ? 60 : 50 }}
      dpr={mobile ? [1, 1] : [1, 1.5]}
      gl={{ antialias: !mobile, alpha: true, powerPreference: 'default' }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      frameloop="always"
    >
      <color attach="background" args={['#08080c']} />
      <fog attach="fog" args={['#08080c', 14, 30]} />

      {/* Simple lights — no HDR, loads instantly */}
      <ambientLight intensity={0.5} />
      <pointLight position={[6, 6, 4]} intensity={30} color="#0ea5e9" />
      <pointLight position={[-6, -4, 2]} intensity={15} color="#7c3aed" />
      <directionalLight position={[0, 8, 2]} intensity={1.2} color="#c8e8ff" />

      <Stars
        radius={80} depth={40}
        count={mobile ? 300 : 600}
        factor={3} saturation={0} fade speed={0.5}
      />

      <CameraRig enabled={!mobile} />

      {/* Desktop: full 6 prisms */}
      <Prism position={[-3.5,  1.2, -2]}  rotation={[0.3,0.5,0.1]} scale={1.4}  speed={0.7} shape="oct"   mobile={mobile} />
      <Prism position={[ 3.8, -0.6, -3]}  rotation={[0.8,0.2,0.4]} scale={1.1}  speed={0.9} shape="ico"   mobile={mobile} />
      <Prism position={[ 0.4,  2.4, -5]}  rotation={[0.1,0.9,0.2]} scale={0.8}  speed={1.1} shape="tet"   mobile={mobile} />
      {!mobile && <>
        <Prism position={[-2.2, -1.8, -4]} rotation={[0.6,0.3,0.7]} scale={0.65} speed={1.3} shape="torus" />
        <Prism position={[ 2.2,  1.8,-1.5]} rotation={[0.2,0.7,0.3]} scale={0.5}  speed={1.5} shape="tet" />
        <Prism position={[-0.8, -2.6, -2]} rotation={[0.4,0.6,0.2]} scale={0.45} speed={0.8} shape="oct" />
      </>}

      <GridFloor />
      <ReadySignal onReady={onReady} />
    </Canvas>
  );
}
