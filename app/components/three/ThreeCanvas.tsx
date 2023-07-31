"use client";
import { Center, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import TestBox from "./TestBox";

const ThreeCanvas = () => {
  return (
    <>
      <Canvas
        camera={{
          fov: 20,
        }}
      >
        <Suspense fallback={null}>
          <TestBox />
          <ambientLight intensity={0.1} />
          <directionalLight />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default ThreeCanvas;
