"use client";
import {
  Center,
  Environment,
  Loader,
  PerspectiveCamera,
  useScroll,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Background } from "./Background";
import { Bunny } from "./Bunny";
import TestBox from "./TestBox";

const ThreeCanvas = () => {
  const [bunnyState, setBunnyState] = useState("default");

  return (
    <>
      <Canvas
        shadows
        camera={{
          position: [-5, 0, -3],
          fov: 30,
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <Environment preset="sunset" />
          <Bunny
            scale={0.8}
            position-y={-2}
            position-x={3}
            position-z={3}
            rotation-y={Math.PI * 1.3}
            state={bunnyState}
            setState={setBunnyState}
          />
          {/* <directionalLight /> */}
          {/* <TestBox /> */}
          <Background />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default ThreeCanvas;
