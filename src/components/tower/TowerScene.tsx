"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Line } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "framer-motion";
import { navFloors } from "@/data/content";
import { scrollToSection } from "@/lib/scroll";

const BEDROCK = "#14171C";
const GRANITE = "#2B2F36";
const GRANITE_LIT = "#3A4049";
const BRASS = "#C9A24B";
const BRASS_DIM = "#8A7035";
const MIST = "#EDE9DF";

const SLAB_H = 0.42;
const GAP = 0.18;
const ROTATION_PERIOD_S = 48;
const FLOOR_COUNT = navFloors.length;

type HoverHandlers = {
  onHoverChange: (hovered: boolean) => void;
};

type FloorProps = {
  index: number;
  label: string;
  id: string;
  reduceMotion: boolean;
  activeId: string | null;
  onHover: (id: string | null) => void;
  onNavigate: (id: string) => void;
};

function floorSize(index: number) {
  // Gentle taper — architectural, not cartoon
  const t = index / (FLOOR_COUNT - 1);
  return {
    width: THREE.MathUtils.lerp(2.55, 1.85, t),
    depth: THREE.MathUtils.lerp(1.85, 1.35, t),
  };
}

function Floor({
  index,
  label,
  id,
  reduceMotion,
  activeId,
  onHover,
  onNavigate,
}: FloorProps) {
  const liftRef = useRef<THREE.Group>(null);
  const hovered = activeId === id;
  const baseY = index * (SLAB_H + GAP);
  const { width, depth } = floorSize(index);
  const targetLift = hovered ? (reduceMotion ? 0.05 : 0.14) : 0;
  const pad = String(index + 1).padStart(2, "0");

  useFrame((_, delta) => {
    if (!liftRef.current) return;
    liftRef.current.position.y = THREE.MathUtils.damp(
      liftRef.current.position.y,
      targetLift,
      14,
      delta
    );
  });

  const slabGeo = useMemo(
    () => new THREE.BoxGeometry(width, SLAB_H, depth),
    [width, depth]
  );
  const plateGeo = useMemo(
    () => new THREE.BoxGeometry(width + 0.04, 0.035, depth + 0.04),
    [width, depth]
  );
  // Oversized invisible hit volume so cursor doesn't flicker between gaps
  const hitGeo = useMemo(
    () =>
      new THREE.BoxGeometry(width + 0.35, SLAB_H + GAP * 0.92, depth + 0.35),
    [width, depth]
  );

  return (
    <group position={[0, baseY, 0]}>
      <group ref={liftRef}>
        {/* Visible slab */}
        <mesh geometry={slabGeo} raycast={() => null}>
          <meshStandardMaterial
            color={hovered ? GRANITE_LIT : GRANITE}
            roughness={0.92}
            metalness={0.08}
            flatShading
            emissive={hovered ? BRASS : "#000000"}
            emissiveIntensity={hovered ? 0.22 : 0}
          />
        </mesh>

        {/* Brass cap plate */}
        <mesh
          geometry={plateGeo}
          position={[0, SLAB_H / 2 + 0.02, 0]}
          raycast={() => null}
        >
          <meshStandardMaterial
            color={hovered ? BRASS : BRASS_DIM}
            roughness={0.55}
            metalness={0.35}
            flatShading
            emissive={hovered ? BRASS : "#000000"}
            emissiveIntensity={hovered ? 0.35 : 0}
          />
        </mesh>

        {/* Blueprint edge lines */}
        <lineSegments raycast={() => null}>
          <edgesGeometry args={[slabGeo]} />
          <lineBasicMaterial
            color={BRASS}
            transparent
            opacity={hovered ? 1 : 0.75}
            toneMapped={false}
          />
        </lineSegments>

        {/* Side annotation — always readable, brightens on hover */}
        <Html
          position={[width / 2 + 0.28, 0, 0]}
          style={{ pointerEvents: "none", whiteSpace: "nowrap", userSelect: "none" }}
          center={false}
          occlude={false}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 8,
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              transform: "translateY(-50%)",
              opacity: hovered ? 1 : 0.55,
              transition: "opacity 150ms ease-out",
            }}
          >
            <span
              style={{
                fontSize: 9,
                letterSpacing: "0.14em",
                color: BRASS,
              }}
            >
              {pad}
            </span>
            <span
              style={{
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: MIST,
                borderBottom: hovered ? `1px solid ${BRASS}` : "1px solid transparent",
                paddingBottom: 1,
              }}
            >
              {label}
            </span>
          </div>
        </Html>

        {/* Hit target — only this receives pointer events */}
        <mesh
          geometry={hitGeo}
          visible={false}
          onPointerOver={(e) => {
            e.stopPropagation();
            onHover(id);
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            onHover(null);
          }}
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(id);
          }}
        >
          <meshBasicMaterial transparent opacity={0} depthWrite={false} />
        </mesh>
      </group>
    </group>
  );
}

function StructureBones() {
  const totalH = FLOOR_COUNT * (SLAB_H + GAP) - GAP;
  const corners: [number, number][] = [
    [-1.15, -0.85],
    [1.15, -0.85],
    [-1.15, 0.85],
    [1.15, 0.85],
  ];

  return (
    <group>
      {/* Bedrock plinth */}
      <mesh position={[0, -0.22, 0]} raycast={() => null}>
        <boxGeometry args={[2.9, 0.28, 2.15]} />
        <meshStandardMaterial
          color={BEDROCK}
          roughness={1}
          metalness={0}
          flatShading
        />
      </mesh>
      <lineSegments position={[0, -0.22, 0]} raycast={() => null}>
        <edgesGeometry args={[new THREE.BoxGeometry(2.9, 0.28, 2.15)]} />
        <lineBasicMaterial color={BRASS_DIM} toneMapped={false} />
      </lineSegments>

      {/* Vertical brass guide posts */}
      {corners.map(([x, z], i) => (
        <mesh key={i} position={[x, totalH / 2, z]} raycast={() => null}>
          <boxGeometry args={[0.035, totalH + 0.2, 0.035]} />
          <meshStandardMaterial
            color={BRASS_DIM}
            roughness={0.4}
            metalness={0.5}
            flatShading
            emissive={BRASS}
            emissiveIntensity={0.08}
          />
        </mesh>
      ))}

      {/* Central spine */}
      <mesh position={[0, totalH / 2, 0]} raycast={() => null}>
        <boxGeometry args={[0.08, totalH + 0.15, 0.08]} />
        <meshStandardMaterial
          color={BRASS}
          roughness={0.45}
          metalness={0.4}
          flatShading
          emissive={BRASS}
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Summit finial */}
      <mesh position={[0, totalH + 0.28, 0]} raycast={() => null}>
        <boxGeometry args={[0.35, 0.12, 0.35]} />
        <meshStandardMaterial
          color={BRASS}
          roughness={0.4}
          metalness={0.45}
          flatShading
          emissive={BRASS}
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Ground ring */}
      <Line
        points={[
          [-1.4, -0.08, -1.05],
          [1.4, -0.08, -1.05],
          [1.4, -0.08, 1.05],
          [-1.4, -0.08, 1.05],
          [-1.4, -0.08, -1.05],
        ]}
        color={BRASS_DIM}
        lineWidth={1}
        transparent
        opacity={0.5}
      />
    </group>
  );
}

function TowerGroup({
  reduceMotion,
  onNavigate,
  onHoverChange,
}: {
  reduceMotion: boolean;
  onNavigate: (id: string) => void;
  onHoverChange: (hovered: boolean) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const floors = useMemo(() => [...navFloors], []);

  const handleHover = useCallback(
    (id: string | null) => {
      setActiveId(id);
      onHoverChange(id !== null);
    },
    [onHoverChange]
  );

  useFrame((_, delta) => {
    if (!groupRef.current || reduceMotion || activeId) return;
    groupRef.current.rotation.y += (Math.PI * 2 * delta) / ROTATION_PERIOD_S;
  });

  const totalH = FLOOR_COUNT * (SLAB_H + GAP) - GAP;

  return (
    <group ref={groupRef} position={[0, -totalH / 2 + 0.15, 0]}>
      <StructureBones />
      {floors.map((floor, i) => (
        <Floor
          key={floor.id}
          index={i}
          id={floor.id}
          label={floor.towerLabel}
          reduceMotion={!!reduceMotion}
          activeId={activeId}
          onHover={handleHover}
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
  const base = useMemo(() => new THREE.Vector3(4.1, 2.05, 5.0), []);
  const pulled = useMemo(() => new THREE.Vector3(4.7, 2.35, 5.7), []);

  useFrame((_, delta) => {
    const target = pullback && !reduceMotion ? pulled : base;
    camera.position.lerp(target, 1 - Math.exp(-9 * delta));
    camera.lookAt(0, 0.15, 0);
  });

  return null;
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 8, 3]} intensity={0.85} color="#F5F0E6" />
      <directionalLight position={[-3, 2, -4]} intensity={0.25} color="#C9A24B" />
    </>
  );
}

type TowerSceneProps = HoverHandlers;

export default function TowerScene({ onHoverChange }: TowerSceneProps) {
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
      camera={{ position: [4.1, 2.05, 5.0], fov: 38, near: 0.1, far: 50 }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
      onPointerMissed={() => onHoverChange(false)}
      aria-hidden
    >
      <Lights />
      <CameraRig pullback={pullback} reduceMotion={!!reduceMotion} />
      <TowerGroup
        reduceMotion={!!reduceMotion}
        onNavigate={onNavigate}
        onHoverChange={onHoverChange}
      />
    </Canvas>
  );
}
