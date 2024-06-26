"use client";
import { Environment, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Background } from "./Background";
import { Bunny } from "./Bunny";
import { bunnyState } from "../../recoil/atoms";
import TextArea from "./TextArea";

const ThreeCanvas = () => {
  return (
    <>
      <Canvas
        shadows
        camera={{
          position: [-5, 0, -3],
          fov: 45,
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <Environment preset="sunset" />
          <Bunny
            scale={0.8}
            position-y={-1.5}
            position-x={1.2}
            position-z={0.8}
            rotation-y={Math.PI * 1.3}
            state={bunnyState}
          />
          <Background />
        </Suspense>
      </Canvas>
      <TextArea />
      <Loader />
    </>
  );
};

export default ThreeCanvas;
