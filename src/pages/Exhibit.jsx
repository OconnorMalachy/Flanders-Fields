import { Link } from "react-router-dom";
import "../App.css";

function Exhibit() {
  return (
    <div className="page">

      <Link to="/#adaptations" className="home-button">
        Back to Adaptations
      </Link>


      <section className="adaptation-header">

        <h1>The Poem as Experience</h1>

        <p>
          A digital interpretation of <em>In Flanders Fields</em> through 
          visual communication
        </p>

      </section>


        <section className="game-section">

        <iframe
        className="unity-game"
        src="/Flanders-Fields/game/index.html"
        title="In Flanders Fields Interactive Experience"
        allow="fullscreen"
        />

        </section>


      <section className="about-section">

        <details>

          <summary>
            About This Adaptation
          </summary>


          <div className="about-content">

            <p>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam cumque, ut nobis fugiat inventore ullam excepturi eaque quam cum facere molestiae accusamus similique iusto reiciendis, perspiciatis dignissimos deleniti! Accusamus, autem?
            </p>


            <p>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe veritatis sapiente quidem incidunt, facilis illum expedita nulla, laudantium numquam culpa voluptates laborum quasi rerum nam delectus earum eaque amet repellat!
            </p>


            <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, mollitia debitis earum unde qui nisi rem excepturi ratione quae. Quos eum nulla distinctio vitae. Molestiae, quidem? Sed quos laborum iste.
            </p>

          </div>

        </details>

      </section>


    </div>
  );
}

export default Exhibit;