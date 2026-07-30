import { useState, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";
import "../App.css";


function AudioController({ enabled }) {
  const { camera } = useThree();

  const soundRef = useRef(null);
  const loadedRef = useRef(false);


  useEffect(() => {

    const listener = new THREE.AudioListener();
    camera.add(listener);

    const sound = new THREE.Audio(listener);
    soundRef.current = sound;


    const loader = new THREE.AudioLoader();

    loader.load(
      `${import.meta.env.BASE_URL}sounds/battlefield.mp3`,
      (buffer) => {

        sound.setBuffer(buffer);
        sound.setLoop(true);
        sound.setVolume(0.25);

        loadedRef.current = true;

        if (enabled) {
          sound.play();
        }

      }
    );


    return () => {
      if (sound.isPlaying) {
        sound.stop();
      }

      camera.remove(listener);
    };

  }, [camera]);


  useEffect(() => {

    const sound = soundRef.current;

    if (!sound || !loadedRef.current)
      return;


    if (enabled) {

      THREE.AudioContext
        .getContext()
        .resume();

      if (!sound.isPlaying)
        sound.play();

    } else {

      if (sound.isPlaying)
        sound.pause();

    }

  }, [enabled]);


  return null;
}



function ExhibitScene({ onLoaded }) {

  const { scene } = useGLTF(
    `${import.meta.env.BASE_URL}models/trench.glb`
  );


  useEffect(() => {
    onLoaded();
  }, [onLoaded]);


  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });


  return (
    <>

      <fog
        attach="fog"
        args={[
          "#9aa6b2",
          0.5,
          15
        ]}
      />


      <ambientLight
        intensity={0.12}
        color="#b8c7d9"
      />


      <hemisphereLight
        skyColor="#8899aa"
        groundColor="#30251d"
        intensity={0.35}
      />


      <directionalLight
        position={[-8,12,6]}
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


      <directionalLight
        position={[5,2,-10]}
        intensity={0.15}
        color="#718aa5"
      />


      <Environment preset="sunset" />


      <primitive
        object={scene}
        scale={3}
      />


      <OrbitControls
        enableZoom
        minDistance={4}
        maxDistance={13}
        minPolarAngle={0.4}
        maxPolarAngle={1.45}
        target={[0,0.5,0]}
      />

    </>
  );
}



export default function Exhibit() {

  const [soundEnabled, setSoundEnabled] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);


  return (

    <div className="exhibit-page">


      <section className="exhibit-info">


        <h1 className="page-title">
          Visual Interpretation of <em>In Flanders Fields</em>
        </h1>


        <div className="sidebar-bottom">


          <div className="audio-reminder">

            <em>
              Orbit around, Zoom in <br/>
              Best with sound
            </em>


            <button
              disabled={!modelLoaded}
              className={`sound-button ${
                soundEnabled ? "enabled" : ""
              }`}
              onClick={() => setSoundEnabled(!soundEnabled)}
            >

              <span className="sound-icon">
                {soundEnabled ? "🔊" : "🔇"}
              </span>

              {modelLoaded
                ? soundEnabled
                  ? "Sound On"
                  : "Sound Off"
                : "Loading..."
              }

            </button>


          </div>


          <div className="about-content">

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



      <section className="exhibit-view">


        <button
          className="back-button"
          onClick={() => window.history.back()}
        >
          Back
        </button>


        <div className="model-label">

          <h2>
            Model: <span>Flanders Poppies</span>
          </h2>

        </div>



        <Canvas

          shadows

          camera={{
            position:[0,3,9],
            fov:45
          }}


          gl={{
            antialias:true,
            toneMapping:THREE.ACESFilmicToneMapping,
            toneMappingExposure:1.15
          }}


          onCreated={({scene}) => {
            scene.background =
              new THREE.Color("#c78989");
          }}

        >

          <AudioController enabled={soundEnabled}/>

          <ExhibitScene
            onLoaded={() => setModelLoaded(true)}
          />

        </Canvas>


      </section>


    </div>

  );
}