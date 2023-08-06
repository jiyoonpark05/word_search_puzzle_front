import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

export const Background = () => {
  const texture = useTexture("textures/forest_background.jpg");

  return (
    <>
      <OrbitControls enableZoom={false} enableRotate={false} />
      <mesh>
        <sphereGeometry args={[5, 64, 64]} />
        <meshStandardMaterial map={texture} side={THREE.BackSide} />
      </mesh>
    </>
  );
};
