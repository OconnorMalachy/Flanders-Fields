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
           <em>In Flanders Fields</em> as an oral recitation with
          visual storytelling.
        </p>
      </section>


      <section className="video-section">
         
        <video
        className="performance-video"
        controls
        >
        <source
            src={`${import.meta.env.BASE_URL}videos/flanders_fields.mp4`}
            type="video/mp4"
        />
        </video>
      </section>


      <section className="about-section">



      </section>

    </div>
  );
}

export default Performance;