"use client";

import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Modal from "./Modal";

type OrganInfo = {
  title: string;
  description: string;
};

const organs: Record<string, OrganInfo> = {
  heart: {
    title: "Heart ↔ Ocean Currents",
    description:
      "The circulatory system mirrors the thermohaline circulation of ocean currents.",
  },
  lungs: {
    title: "Lungs ↔ Gas Exchange",
    description:
      "Like lungs, oceans exchange gases through photosynthesis and CO₂ absorption.",
  },
};

export default function HumanBody() {
  const [selectedOrgan, setSelectedOrgan] = useState<OrganInfo | null>(null);

  const handleClick = (organ: keyof typeof organs) => {
    setSelectedOrgan(organs[organ]);
  };

  return (
    <div className="relative w-full h-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <mesh onClick={() => handleClick("heart")} position={[-1, 1, 0]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial />
        </mesh>
        <mesh onClick={() => handleClick("lungs")} position={[1, 1, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
      {selectedOrgan && (
        <Modal
          title={selectedOrgan.title}
          description={selectedOrgan.description}
          onClose={() => setSelectedOrgan(null)}
        />
      )}
    </div>
  );
}
