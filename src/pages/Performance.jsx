import "../App.css";
import { Link } from "react-router-dom";
function Performance() {
  return (
    <div className="page">
    <Link to="/#adaptations" className="home-button">
        Back to Home
    </Link>
      <section className="adaptation-header">
        <h1>The Poem as Performance</h1>

        <p>
          Experience <em>In Flanders Fields</em> through oral recitation and
          visual storytelling.
        </p>
      </section>


      <section className="video-section">

        <video
          className="performance-video"
          controls
        >
          <source
            src="/videos/big_buck_bunny.mp4"
            type="video/mp4"
          />

          Your browser does not support the video element.
        </video>

      </section>


      <section className="about-section">

        <details>
          <summary>
            About This Adaptation
          </summary>

          <div className="about-content">

            <p>
              This adaptation transforms John McCrae's poem from a written
              literary work into a performance that combines oral, visual, and
              nonverbal communication. By hearing the poem spoken aloud, the
              audience can experience the emotion and urgency behind the
              speaker's words.
            </p>

            <p>
              The visual elements accompanying the recitation are designed to
              emphasize the contrast between the peaceful imagery of nature and
              the destruction of war. Through changes in tone, pacing, and
              imagery, this performance aims to create a more immersive
              experience of remembrance and reflection.
            </p>

          </div>

        </details>

      </section>

    </div>
  );
}

export default Performance;