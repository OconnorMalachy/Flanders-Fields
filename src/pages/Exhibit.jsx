import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";
import "../App.css";


function ExhibitScene() {
  const { scene } = useGLTF(
    `${import.meta.env.BASE_URL}models/trench.glb`
  );

  // Enable shadows on model meshes
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });


  return (
    <>
      {/* Deep atmospheric fog */}
      <fog
        attach="fog"
        args={[
          "#9aa6b2", // fog color
          .5,          // start distance
          15          // end distance
        ]}
      />


      {/* Soft overall illumination */}
      <ambientLight
        intensity={0.12}
        color="#b8c7d9"
      />


      {/* Sky + ground bounce light */}
      <hemisphereLight
        skyColor="#8899aa"
        groundColor="#30251d"
        intensity={.35}
      />


      {/* Main warm sun */}
      <directionalLight
        position={[-8, 12, 6]}
        intensity={3.5}
        color="#ffd9a3"
        castShadow

        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}

        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}

        shadow-bias={-0.0002}
      />


      {/* Small cool fill light */}
      <directionalLight
        position={[5, 2, -10]}
        intensity={0.15}
        color="#718aa5"
      />

      {/* Environment reflections */}
      <Environment preset="sunset" />


      <primitive
        object={scene}
        scale={3}
        position={[0, 0, 0]}
      />
<OrbitControls
  enableZoom
  minDistance={4}
  maxDistance={25}

  minPolarAngle={0.4}
  maxPolarAngle={1.45}

  target={[0,0.5,0]}
/>

    </>
  );
}



export default function Exhibit() {

  const [aboutOpen, setAboutOpen] = useState(false);


  return (
    <div className="exhibit-page">


      {/* LEFT INFORMATION PANEL */}
      <section className="exhibit-info">

        <h1 className="page-title">
          Visual Interpretation of <em>In Flanders Fields</em>
        </h1>


        <div className="sidebar-bottom">


          <div className="audio-reminder">
            <em>Orbit around, Zoom in <br/>Best with sound</em>
          </div>


          <div
            className={
              aboutOpen
                ? "about-content open"
                : "about-content"
            }
          >

            <p>
              This exhibit transforms <em>In Flanders Fields</em>
              into a visual environment exploring memory,
              sacrifice, and remembrance.
            </p>


            <p>
              Through a recreated battlefield landscape,
              the audience is invited to reflect on the
              connection between place, history, and poetry.
            </p>

          </div>


        </div>

      </section>



      {/* 3D VIEW */}
      <section className="exhibit-view">


        <button
          className="back-button"
          onClick={() => window.history.back()}
        >
          Back
        </button>



        <div className="model-label">

          <h2>
            Model:{" "}
            <span>Flanders Poppies</span>
            {" "}by:{" "}
            <span>Malachy O'Connor</span>
          </h2>

        </div>




        <Canvas

          shadows

          camera={{
            position: [0, 3, 9],
            fov: 45
          }}


          gl={{
            antialias: true,
            toneMapping:
              THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.15
          }}


          onCreated={({ scene }) => {

            scene.background = new THREE.Color(
              "#9aa6b2"
            );

          }}

        >

          <ExhibitScene />

        </Canvas>


      </section>


    </div>
  );
}