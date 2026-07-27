import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#5b8c5a" />
    </mesh>
  );
}

function Placeholder() {
  return (
    <mesh position={[0, 1, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

export default function FieldScene() {
  return (
    <Canvas
      camera={{ position: [0, 4, 8], fov: 50 }}
      style={{ width: "100%", height: "700px" }}
    >
      <color attach="background" args={["#cfe8ff"]} />

      <ambientLight intensity={1} />
      <directionalLight position={[5, 10, 5]} intensity={2} />

      <Ground />

      <Placeholder />

      <OrbitControls
        enablePan={false}
        minDistance={4}
        maxDistance={15}
      />
    </Canvas>
  );
}