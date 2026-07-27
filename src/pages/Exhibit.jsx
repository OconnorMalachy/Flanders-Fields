import { useState } from "react";
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


      {/* Temporary test object */}
      {/* Replace this with your Blender model later */}
      <mesh>
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

  const [aboutOpen, setAboutOpen] = useState(false);


  return (
    <div className="exhibit-page">


      {/* LEFT INFORMATION PANEL */}
      <section className="exhibit-info">


        <h1 className="page-title">
          Visual Interpretation of <em> In Flanders Fields</em>
        </h1>



        <div className="sidebar-bottom">


          {/* Audio reminder */}
          <div className="audio-reminder">
            <em>Best with sound</em>
          </div>



          {/* Expandable About */}
          <button
            className="about-button"
            onClick={() => setAboutOpen(!aboutOpen)}
          >
            <span>
              About the Exhibit
            </span>

            <span>
              {aboutOpen ? "-" : "+"}
            </span>

          </button>



          <div
            className={
              aboutOpen
                ? "about-content open"
                : "about-content"
            }
          >

            <p>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit itaque molestias ab. Quidem, cumque tempora quae, impedit quisquam cum accusamus obcaecati molestias rem sit neque ea corrupti, voluptatem optio esse.
            </p>


            <p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur et deserunt ratione dolorum facilis aspernatur? Eligendi, unde corrupti laudantium sit, soluta provident nam modi repellendus quibusdam omnis fugiat ipsam suscipit!
            </p>

          </div>


        </div>


      </section>





      {/* 3D EXHIBIT VIEW */}
      <section className="exhibit-view">


        {/* Back button */}
        <button
          className="back-button"
          onClick={() => window.history.back()}
        >
          Back
        </button>




        {/* Model information label */}
        <div className="model-label">

          <h2>
            Model:{" "}
            <span>
              Flanders Poppies
            </span>


            {" "}by:{" "}
            <span>
              Malachy O'Connor
            </span>
          </h2>

        </div>





        <Canvas
          camera={{
            position: [0, 2, 8],
            fov: 45
          }}
        >

          <ExhibitScene />

        </Canvas>


      </section>


    </div>
  );
}