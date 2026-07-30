import { Link } from "react-router-dom";
import "../App.css";

function Prescription() {
  return (
    <div className="page">

      <Link to="/#adaptations" className="home-button">
        Back to Adaptations
      </Link>


      <section className="adaptation-header">
        <h1>The Poem as Prescription</h1>

        <p>
          A literary prescription designed to treat historical apathy through
          the themes of <em> In Flanders Fields</em>
        </p>
      </section>


      <section className="prescription-paper">

        <div className="prescription-title">
          <h2>Prescription Record</h2>
        </div>


        <div className="prescription-info">

          <p>
            <strong>Patient:</strong> The Historically Disconnected
          </p>

          <p>
            <strong>Medication:</strong> <em>In Flanders Fields</em>
          </p>

          <p>
            <strong>Prescribed By:</strong> Lieutenant Colonel John McCrae
          </p>

          <p>
            <strong>Treatment Goal:</strong> Restoration of remembrance,
            empathy, and historical connection
          </p>

        </div>


        <hr />


        <h3>Diagnosis: Historical Apathy</h3>

        <p>
          This prescription is intended to alleviate a widespread indifference
          toward the importance of history and the recognition of sacrifices
          that have shaped the modern world. The disease may appear through
          several symptoms: apathy toward remembrance, trivialization of war,
          and a lack of emotion when discussing past or ongoing tragedies.
        </p>

        <p>
          The patient has lost connection with the people who came before them,
          reducing the lives of real individuals into simplified textbook
          summaries while abandoning the complexity and humanity behind their
          experiences.
        </p>


        <h3>Prognosis</h3>

        <p>
          Through engagement with this poem, the patient is expected to develop
          a deeper connection with history and a renewed sense of civic
          responsibility. This treatment does not seek to create lasting sorrow
          or guilt, but instead encourages empathy and meaningful remembrance.
        </p>

        <p>
          The prescription of <em>In Flanders Fields</em> aims to achieve a cure
          for historical apathy by presenting the past in a way that encourages
          emotional understanding and personal reflection.
        </p>


        <h3>Mechanism of Action</h3>

        <p>
          <em>In Flanders Fields</em> aids in healing through the simplicity
          and emotional clarity of its imagery. McCrae moves away from
          traditional descriptions of war focused on strategy and combat,
          instead presenting an intimate image of crosses, poppies, birdsong,
          and destruction.
        </p>

        <p>
          The contrast between nature and war creates the emotional foundation
          of the poem. The peaceful image of poppies growing among graves exists
          alongside the violence surrounding the battlefield, capturing both
          the beauty of life and the tragedy of loss.
        </p>

        <p>
          The poem is narrated by a fallen soldier, shifting the perspective
          from a distant observation of a cemetery into a direct message to the
          living. This personal address makes the poem more intimate than a
          traditional historical account and reinforces the responsibility of
          future generations to remember.
        </p>

        <p>
          The most powerful active ingredient within this treatment is the
          symbolism of the poppies. Their growth among the graves represents
          the resilience of life while maintaining respect for those who have
          been lost. This imagery creates an emotional connection that allows
          remembrance to become a personal experience rather than simply a
          historical fact.
        </p>


        <h3>Dosage & Regimen</h3>

        <p>
          For optimal results, the patient should engage with this poem during
          moments of reflection and remembrance, especially during occasions
          such as Memorial Day. Following consumption of the poem, several
          minutes of personal consideration should be dedicated toward
          understanding how the past has shaped the present and how individual
          actions may shape the future.
        </p>


        <div className="signature">

          <p>
            Physician Signature:
          </p>

          <p>
            _______________________
          </p>

          <p>
            
          </p>

        </div>

      </section>




    </div>
  );
}

export default Prescription;