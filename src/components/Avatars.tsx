// Avatars.tsx
"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";

const RunningAvatar: React.FC = () => {
  const scene = useLoader(GLTFLoader, "/models/avatar1.glb").scene;
  const reference = useRef<THREE.Group>(null);

  scene.scale.set(10, 10, 1);
  scene.position.y = -10;

  // eslint-disable-next-line react/no-unknown-property
  return <primitive object={scene} ref={reference} />;
};

const StaticAvatar: React.FC = () => {
  const scene = useLoader(GLTFLoader, "/models/avatar1.glb").scene;
  // eslint-disable-next-line react/no-unknown-property
  return <primitive object={scene} />;
};

const Avatars: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "50vh" }}>
      <Canvas camera={{ position: [0, 10, 30], fov: 50 }}>
        <ambientLight />
        <directionalLight />
        <StaticAvatar />
        <RunningAvatar />
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

export default Avatars;
