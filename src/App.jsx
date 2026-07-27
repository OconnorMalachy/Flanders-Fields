import { Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Performance from "./pages/Performance";
import Prescription from "./pages/Prescription";
import Exhibit from "./pages/Exhibit";
import Reveal from "./components/Reveal";
import "./App.css";

function Home() {
  return (
    <div className="page">
      <header className="hero">
        <div className="overlay">
          <h1>In Flanders Fields</h1>

          <p className="subtitle">
            A Multimodal Exploration of Memory, Sacrifice, and Remembrance
          </p>
        </div>
      </header>

      <section className="intro">
        <div className="intro-text">

          <h2>Introduction</h2>

          <h3>About the Poem</h3>

          <p>
            Written by Lieutenant Colonel John McCrae during the First World War,
            <em> In Flanders Fields </em> is one of the most recognizable poems of
            remembrance in modern history. McCrae composed the poem in 1915 while
            serving as a Canadian physician on the Western Front. Inspired by the
            battlefield surrounding him, the poem reflects on the lives lost during
            war while calling upon future generations to remember those who
            sacrificed themselves.
          </p>

          <p>
            Through vivid imagery of poppies, crosses, and the battlefield landscape,
            McCrae transforms a specific moment of grief into a universal reflection
            on memory and responsibility. The contrast between the beauty of nature
            and the destruction of war creates a powerful emotional tension, allowing
            the poem to serve as both an expression of mourning and a lasting symbol
            of remembrance.
          </p>

          <h3>Project Purpose</h3>

          <p>
            This project explores how a poem can be transformed through different
            forms of communication while preserving its original meaning. Although
            <em> In Flanders Fields </em> was originally written as a literary work,
            its themes of sacrifice, remembrance, and human connection can be
            communicated through many different mediums.
          </p>

          <p>
            Through the WOVEN communication modalities of Written, Oral, Visual,
            Electronic, and Nonverbal communication, these adaptations reinterpret
            McCrae's poem for new audiences. Each adaptation presents a unique way
            to experience the poem while maintaining its central themes of memory
            and reflection.
          </p>

        </div>


        <div className="poem">
          <h3>In Flanders Fields</h3>

          <p>
            In Flanders fields the poppies blow<br />
            Between the crosses, row on row,<br />
            That mark our place; and in the sky<br />
            The larks, still bravely singing, fly<br />
            Scarce heard amid the guns below.
          </p>

          <p>
            We are the Dead. Short days ago<br />
            We lived, felt dawn, saw sunset glow,<br />
            Loved and were loved, and now we lie<br />
            In Flanders fields.
          </p>

          <p>
            Take up our quarrel with the foe:<br />
            To you from failing hands we throw<br />
            The torch; be yours to hold it high.<br />
            If ye break faith with us who die<br />
            We shall not sleep, though poppies grow<br />
            In Flanders fields.
          </p>

          <p className="poem-note">
            — Lieutenant Colonel John McCrae, 1915
          </p>
        </div>

      </section>

      
      <section className="gallery" id="adaptations">
        <Reveal>
        <Link to="/performance" className="card">
          <h3>The Poem as Performance</h3>

          <p>
            Experience the poem through oral recitation, visual storytelling,
            and atmosphere.
          </p>
        </Link>
        </Reveal>

        <Reveal>
        <Link to="/prescription" className="card">
          <h3>The Poem as Prescription</h3>

          <p>
            Explore how the poem can address the emotional ailment of forgetting
            through remembrance and reflection.
          </p>
        </Link>
        </Reveal>

        <Reveal>
        <Link to="/exhibit" className="card">
          <h3>The Poem as Exhibit</h3>

          <p>
            Discover an interactive interpretation of the poem through artifacts,
            visuals, and historical memory.
          </p>
        </Link>
        </Reveal>

      </section>


      <footer>
        <p>
          Malachy O'Connor | English 1102
        </p>
      </footer>

    </div>
  );
}


function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route 
          path="/performance" 
          element={<Performance />} 
        />

        <Route 
          path="/prescription" 
          element={<Prescription />} 
        />

        <Route 
          path="/exhibit" 
          element={<Exhibit />} 
        />

      </Routes>
    </>
  );
}

export default App;