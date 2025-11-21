import { useRef, useMemo, Suspense, Component } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Simple error boundary
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Floating particles/feathers rising toward the sun
function Particles({ count = 200 }) {
  const mesh = useRef();
  const light = useRef();

  // Generate random particle positions and properties
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * 50;

      temp.push({ time, factor, speed, x, y, z, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  // Create particle geometry
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    // Animate particles rising
    particles.forEach((particle, i) => {
      let { time, factor, speed, x, y, z } = particle;

      // Update time
      time = particle.time += speed / 2;

      // Rising motion with slight wave
      const a = Math.cos(time) + Math.sin(time * 1) / 10;
      const b = Math.sin(time) + Math.cos(time * 2) / 10;

      dummy.position.set(
        x + Math.cos((time / 10) * factor) * 2,
        y + (Math.sin(time) * factor) / 10 + time * 0.5, // Rising motion
        z + Math.sin((time / 10) * factor) * 2
      );

      // Reset particles that go too high
      if (dummy.position.y > 25) {
        particle.time = 0;
        dummy.position.y = -25;
      }

      dummy.scale.set(
        0.3 + Math.sin(time * 2) * 0.1,
        0.3 + Math.sin(time * 2) * 0.1,
        0.3 + Math.sin(time * 2) * 0.1
      );

      dummy.rotation.set(time * 0.5, time * 0.3, time * 0.2);
      dummy.updateMatrix();

      mesh.current.setMatrixAt(i, dummy.matrix);
    });

    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <dodecahedronGeometry args={[0.2, 0]} />
      <meshStandardMaterial
        color="#FFD700"
        emissive="#FFA500"
        emissiveIntensity={0.3}
        transparent
        opacity={0.6}
      />
    </instancedMesh>
  );
}

// Glowing sun element
function Sun() {
  const sunRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Gentle pulsing
    sunRef.current.scale.setScalar(1 + Math.sin(time * 0.5) * 0.1);
  });

  return (
    <group position={[0, 15, -20]}>
      {/* Sun core */}
      <mesh ref={sunRef}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial
          color="#FFD700"
          emissive="#FFA500"
          emissiveIntensity={2}
        />
      </mesh>
      {/* Sun glow */}
      <pointLight
        color="#FFD700"
        intensity={100}
        distance={100}
        decay={2}
      />
      <pointLight
        color="#FFA500"
        intensity={50}
        distance={50}
        decay={2}
      />
    </group>
  );
}

// Feather-like particles
function Feathers({ count = 50 }) {
  const mesh = useRef();

  const feathers = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 10 + Math.random() * 50;
      const speed = 0.005 + Math.random() / 500;
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.5) * 40;
      const z = (Math.random() - 0.5) * 30;

      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    feathers.forEach((feather, i) => {
      let { time, factor, speed, x, y, z } = feather;

      time = feather.time += speed;

      // Gentle floating motion
      dummy.position.set(
        x + Math.sin(time * factor * 0.1) * 3,
        y + Math.sin(time) * 2 + time * 0.3,
        z + Math.cos(time * factor * 0.1) * 3
      );

      if (dummy.position.y > 20) {
        feather.time = 0;
        dummy.position.y = -20;
      }

      // Feather-like rotation (tumbling)
      dummy.rotation.set(
        Math.sin(time * 2) * 0.5,
        time * 0.5,
        Math.cos(time * 2) * 0.3
      );

      dummy.scale.set(0.8, 0.1, 0.3);
      dummy.updateMatrix();

      mesh.current.setMatrixAt(i, dummy.matrix);
    });

    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#F5DEB3"
        emissive="#FFD700"
        emissiveIntensity={0.1}
        transparent
        opacity={0.4}
      />
    </instancedMesh>
  );
}

// Fallback component for when Three.js fails
function FallbackBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0a1628] via-[#050510] to-[#050510]">
      {/* Simple CSS animated particles as fallback */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#FFD700]/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function IcarusBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <ErrorBoundary fallback={<FallbackBackground />}>
        <Suspense fallback={<FallbackBackground />}>
          <Canvas
            camera={{ position: [0, 0, 30], fov: 75 }}
            style={{ background: 'transparent' }}
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0);
            }}
          >
            <ambientLight intensity={0.2} />
            <Sun />
            <Particles count={150} />
            <Feathers count={40} />

            {/* Gradient fog for depth */}
            <fog attach="fog" args={['#0a1628', 30, 80]} />
          </Canvas>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
