import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function GeometricShapes() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  // Create multiple geometric shapes
  const shapes = useMemo(() => {
    const shapeData = [];
    for (let i = 0; i < 15; i++) {
      shapeData.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10 - 5,
        ] as [number, number, number],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
        scale: 0.3 + Math.random() * 0.7,
        type: Math.floor(Math.random() * 3),
        speed: 0.001 + Math.random() * 0.003,
      });
    }
    return shapeData;
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      // Subtle parallax based on mouse
      groupRef.current.rotation.y = mouse.x * 0.05;
      groupRef.current.rotation.x = mouse.y * 0.03;
      
      // Rotate each child
      groupRef.current.children.forEach((child, i) => {
        child.rotation.x += shapes[i]?.speed || 0.001;
        child.rotation.y += shapes[i]?.speed || 0.001;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => (
        <mesh key={i} position={shape.position} rotation={shape.rotation} scale={shape.scale}>
          {shape.type === 0 && <octahedronGeometry args={[1, 0]} />}
          {shape.type === 1 && <icosahedronGeometry args={[1, 0]} />}
          {shape.type === 2 && <tetrahedronGeometry args={[1, 0]} />}
          <meshBasicMaterial
            color={i % 2 === 0 ? "#c9a962" : "#4fd1c5"}
            wireframe
            transparent
            opacity={0.15}
          />
        </mesh>
      ))}
    </group>
  );
}

function GlowOrbs() {
  const orb1Ref = useRef<THREE.Mesh>(null);
  const orb2Ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (orb1Ref.current) {
      orb1Ref.current.position.x = Math.sin(t * 0.3) * 3 - 4;
      orb1Ref.current.position.y = Math.cos(t * 0.2) * 2 + 1;
    }
    if (orb2Ref.current) {
      orb2Ref.current.position.x = Math.sin(t * 0.25 + 2) * 3 + 4;
      orb2Ref.current.position.y = Math.cos(t * 0.3 + 1) * 2 - 1;
    }
  });

  return (
    <>
      <mesh ref={orb1Ref} position={[-4, 1, -8]}>
        <sphereGeometry args={[2, 16, 16]} />
        <meshBasicMaterial color="#c9a962" transparent opacity={0.08} />
      </mesh>
      <mesh ref={orb2Ref} position={[4, -1, -10]}>
        <sphereGeometry args={[2.5, 16, 16]} />
        <meshBasicMaterial color="#4fd1c5" transparent opacity={0.06} />
      </mesh>
    </>
  );
}

export const ParallaxBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: "transparent" }}
      >
        <GeometricShapes />
        <GlowOrbs />
      </Canvas>
    </div>
  );
};
