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
import { RecoilRoot } from "recoil";
import { Background } from "./Background";
import { Bunny } from "./Bunny";
import TextArea from "./TextArea";

const ThreeCanvas = () => {
  const [bunnyState, setBunnyState] = useState("default");

  return (
    <RecoilRoot>
      <Canvas
        shadows
        camera={{
          position: [-5, 0, -3],
          fov: 45,
        }}
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
            setState={setBunnyState}
          />
          {/* <directionalLight /> */}
          <Background />
        </Suspense>
      </Canvas>
      <TextArea />
      <Loader />
    </RecoilRoot>
  );
};

export default ThreeCanvas;
