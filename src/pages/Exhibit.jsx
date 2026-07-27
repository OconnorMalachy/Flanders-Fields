import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "../App.css";


function ExhibitScene() {
  return (
    <>
      <ambientLight intensity={1} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      {/* Test cube */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="white" />
      </mesh>


      <OrbitControls
        enableZoom={true}
        minDistance={2}
        maxDistance={20}
      />
    </>
  );
}


export default function Exhibit() {
  return (
    <div className="exhibit-page">

      {/* 20% sidebar */}
      <section className="exhibit-info">

        <h1>
          In Flanders Fields
        </h1>

        <p>
          An interactive exploration of John McCrae's
          poem and the history, memory, and sacrifice
          behind its creation.
        </p>


        <h2>
          About the Exhibit
        </h2>

        <p>
          Explore artifacts, historical context,
          and interpretations of the poem through
          a digital museum experience.
        </p>

      </section>



      {/* 80% exhibit */}
      <section className="exhibit-view">

        <Canvas
          camera={{
            position:[0,2,8],
            fov:45
          }}
        >
          <ExhibitScene />
        </Canvas>


      </section>


    </div>
  );
}