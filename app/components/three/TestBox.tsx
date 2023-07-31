import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { BoxGeometry, Mesh } from "three";

function TestBox() {
  const myMesh = useRef<Mesh>();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
  });

  return (
    <mesh ref={myMesh}>
      <boxGeometry />
      <meshPhongMaterial color="blue" />
    </mesh>
  );
}

export default TestBox;
