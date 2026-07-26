import { Link } from "react-router-dom";
import "../App.css";

function Exhibit() {
  return (
    <div className="page">

      <Link to="/#adaptations" className="home-button">
        ← Back to Adaptations
      </Link>


      <section className="adaptation-header">

        <h1>The Poem as Experience</h1>

        <p>
          A digital interpretation of <em>In Flanders Fields</em> exploring
          memory, sacrifice, and remembrance through interactive space.
        </p>

      </section>


        <section className="game-section">

        <iframe
            className="unity-game"
            src="/game/index.html"
            title="In Flanders Fields Interactive Experience"
            allow="fullscreen"
            tabIndex={0}
        />

        </section>


      <section className="about-section">

        <details>

          <summary>
            About This Adaptation
          </summary>


          <div className="about-content">

            <p>
              This adaptation transforms <em>In Flanders Fields</em> into an
              interactive digital environment. Instead of experiencing the poem
              only through written language, users explore a virtual space that
              represents the themes of remembrance, loss, and reflection.
            </p>


            <p>
              The interactive environment allows the audience to engage with
              the poem through spatial and visual communication. By moving
              through the world and discovering elements within it, users
              experience memory as something active rather than something
              confined to the past.
            </p>


            <p>
              The goal of this adaptation is to demonstrate how digital media
              can preserve and reinterpret historical experiences. The virtual
              environment encourages users to reflect on the human stories
              behind the poem and consider how remembrance continues across
              generations.
            </p>

          </div>

        </details>

      </section>


    </div>
  );
}

export default Exhibit;