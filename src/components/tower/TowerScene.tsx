"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "framer-motion";
import { navFloors } from "@/data/content";
import { scrollToSection } from "@/lib/scroll";

const BEDROCK = "#14171C";
const GRANITE = "#2B2F36";
const BRASS = "#C9A24B";
const MIST = "#EDE9DF";

const SLAB_H = 0.38;
const GAP = 0.12;
const ROTATION_PERIOD_S = 40;

type FloorProps = {
  index: number;
  label: string;
  id: string;
  reduceMotion: boolean;
  onNavigate: (id: string) => void;
};

function Floor({ index, label, id, reduceMotion, onNavigate }: FloorProps) {
  const liftRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const baseY = index * (SLAB_H + GAP);
  const width = 2.4 - index * 0.12;
  const depth = 1.6 - index * 0.08;
  const targetLift = hovered ? (reduceMotion ? 0.04 : 0.1) : 0;

  useFrame((_, delta) => {
    if (!liftRef.current) return;
    liftRef.current.position.y = THREE.MathUtils.damp(
      liftRef.current.position.y,
      targetLift,
      12,
      delta
    );
  });

  const geometry = useMemo(
    () => new THREE.BoxGeometry(width, SLAB_H, depth),
    [width, depth]
  );

  return (
    <group position={[0, baseY, 0]}>
      <group
        ref={liftRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(id);
        }}
      >
        <mesh geometry={geometry} castShadow={false} receiveShadow={false}>
          <meshBasicMaterial
            color={hovered ? BRASS : GRANITE}
            toneMapped={false}
          />
        </mesh>
        <lineSegments>
          <edgesGeometry args={[geometry]} />
          <lineBasicMaterial color={BRASS} toneMapped={false} />
        </lineSegments>

        {hovered ? (
          <Html
            position={[width / 2 + 0.35, 0, 0]}
            style={{ pointerEvents: "none", whiteSpace: "nowrap" }}
            center={false}
          >
            <span
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: "10px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: MIST,
                background: BEDROCK,
                border: `1px solid ${BRASS}`,
                padding: "4px 8px",
              }}
            >
              {label}
            </span>
          </Html>
        ) : null}
      </group>
    </group>
  );
}

function TowerGroup({
  reduceMotion,
  onNavigate,
}: {
  reduceMotion: boolean;
  onNavigate: (id: string) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const floors = useMemo(() => [...navFloors], []);

  useFrame((_, delta) => {
    if (!groupRef.current || reduceMotion) return;
    groupRef.current.rotation.y += (Math.PI * 2 * delta) / ROTATION_PERIOD_S;
  });

  return (
    <group ref={groupRef} position={[0, -1.4, 0]}>
      {floors.map((floor, i) => (
        <Floor
          key={floor.id}
          index={i}
          id={floor.id}
          label={floor.towerLabel}
          reduceMotion={!!reduceMotion}
          onNavigate={onNavigate}
        />
      ))}
    </group>
  );
}

function CameraRig({
  pullback,
  reduceMotion,
}: {
  pullback: boolean;
  reduceMotion: boolean;
}) {
  const { camera } = useThree();
  const base = useMemo(() => new THREE.Vector3(3.2, 1.6, 4.2), []);
  const pulled = useMemo(() => new THREE.Vector3(3.8, 1.9, 5.0), []);

  useFrame((_, delta) => {
    const target = pullback && !reduceMotion ? pulled : base;
    camera.position.lerp(target, 1 - Math.exp(-10 * delta));
    camera.lookAt(0, 0.4, 0);
  });

  return null;
}

export default function TowerScene() {
  const reduceMotion = useReducedMotion();
  const [pullback, setPullback] = useState(false);
  const pendingId = useRef<string | null>(null);

  const onNavigate = (id: string) => {
    pendingId.current = id;
    if (reduceMotion) {
      scrollToSection(id);
      return;
    }
    setPullback(true);
    window.setTimeout(() => {
      setPullback(false);
      if (pendingId.current) scrollToSection(pendingId.current);
      pendingId.current = null;
    }, 300);
  };

  return (
    <Canvas
      dpr={Math.min(
        typeof window !== "undefined" ? window.devicePixelRatio : 1,
        2
      )}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      camera={{ position: [3.2, 1.6, 4.2], fov: 42, near: 0.1, far: 40 }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
      aria-hidden
    >
      <color attach="background" args={["#00000000"]} />
      <CameraRig pullback={pullback} reduceMotion={!!reduceMotion} />
      <TowerGroup reduceMotion={!!reduceMotion} onNavigate={onNavigate} />
    </Canvas>
  );
}
