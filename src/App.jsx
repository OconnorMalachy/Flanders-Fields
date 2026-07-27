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
            <em>In Flanders Fields</em> Multimodal Project
          </p>
        </div>
      </header>

      <section className="intro">
        <div className="intro-text">

          <h2>Introduction</h2>

          <h3>About the Poem</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores est, corporis vel at possimus quas, ipsum voluptates reiciendis tempore harum aliquam eum sequi enim magni excepturi temporibus error consectetur quia?
          </p>

          <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi eos laborum animi, tempore et esse tempora numquam recusandae quod alias, optio, cupiditate veritatis voluptatum ut sunt quos dolor sapiente nisi.
          </p>

          <h3>Project Purpose</h3>

          <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis in reprehenderit, accusantium, vitae obcaecati aperiam suscipit dolores error ut aliquam facere quisquam ea ullam? Dolorum dignissimos excepturi assumenda neque sapiente?
          </p>

          <p>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus dolorem maiores quod, suscipit tempora odio dolore, repellat accusamus velit, magnam aliquid harum rem autem odit expedita labore veniam architecto! Similique.
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
            - John McCrae, 1915
          </p>
        </div>

      </section>

      
      <section className="gallery" id="adaptations">

        <Link to="/performance" className="card">
          <h3>The Poem as Performance</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis unde earum fugiat fugit consequuntur ullam necessitatibus et in, corrupti veniam sunt, voluptatem animi impedit tempora ut officia placeat ipsa.
          </p>
        </Link>


        <Link to="/prescription" className="card">
          <h3>The Poem as Prescription</h3>

          <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, provident nulla? Repudiandae doloremque vel dignissimos aperiam totam eaque illum neque reprehenderit ipsam, quibusdam dolorem? Earum dignissimos ex officiis culpa ratione.
          </p>
        </Link>



        <Link to="/exhibit" className="card">
          <h3>The Poem as Exhibit</h3>

          <p>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi eius, assumenda repellat recusandae delectus voluptatem maiores sequi dignissimos, necessitatibus, neque voluptate? Quos nam accusantium repudiandae doloremque ipsa maiores ratione aliquid?
          </p>
        </Link>
      

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