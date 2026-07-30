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
  <em>In Flanders Fields</em> by John McCrae is among the most influential poems on war and has come to define the remembrance of the First World War. Lieutenant-Colonel McCrae was a soldier and surgeon during the war where he wrote <em>In Flanders Fields</em> in 1915 after witnessing the death of his friend Alexis Helmer during the Second Battle of Ypres in Belgium (The Canadian Encyclopedia). Motivated by the death and devastation of the battlefield around him, McCrae wrote his poem focused on the contrasting continuities of nature he saw, such as the fast-blooming poppies near the graves of recently killed soldiers. The poem, which was first published in <em>Punch</em> magazine, quickly gained international interest. It became a staple in the Allied war effort; it was used widely in recruitment, war-bond advertisements, and other forms of propaganda across Britain and Canada (Gilder Lehrman Institute). The red poppy, which is featured prominently in the poem’s gripping imagery, has become an image of remembrance and serves as an enduring memorial to those who died in the First World War (Evergreen Museum & Library).
</p>

          <h3><br/>Purposes of Adaptations</h3>
<p>
  My three adaptations of <em>In Flanders Fields</em> explore the poem’s message of remembrance and how it can be effectively communicated through a wide range of media. Each adaptation takes the poem’s core themes of sacrifice, memory, and piety and transforms them in a manner digestible to a large variety of audiences. In presenting these ideas via different modes of communication, the adaptations give the audience the ability to engage with the poem’s message in new and meaningful ways. While each medium approaches the poem in a different way, all three adaptations pay fidelity to the guiding message of honoring the sacrifices of the past through focused reflection.
</p>

          <p id="purpose">
            <em><br/>Below you will find more about the specific process and purpose of each adaptation on their card <br/> Click on each to view the adaptation</em>
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
The video performance is a combination of a spoken recitation of the poem and several video clips, ambient music, and captioning. For the recitation, I utilized vocal pauses and tonal inflections to strengthen the emotional impact and weight of the poem. The visuals mirror the progression of the poem, going from peaceful fields to a grave yard and ultimately to a sunset, reinforcing the poem's contrast of natural beauty and war as well as the responsibility to continue the legacy of the dead. 
<br/>This adaptation was designed to make the tone of the poem more explicit via an immersion into the emotions through visual and auditory suggestions. In contrast to the written poems' communication through language alone, the most powerful aspects of this adaptation are those which are unspoken and lend the audience to connect with the themes more personally. This interpretation encourages the viewer to focus on the human suffering caused by war and to develop an attitude of responsibility towards remembrance.
</p>
        </Link>


        <Link to="/prescription" className="card">
          <h3>The Poem as Prescription</h3>

          <p>
The prescription imagines <em>In Flanders Fields</em> as a medication toward historical apathy. In real life, McCrae was originally a physician before he was a soldier (canadianencyclopedia) so this presentation of the poem is fitting. Instead of treating a wound, the poem is intended to address a larger societal indifference toward the labors of previous generations in securing the future. I designed the prescription to look like a real prescription, however the medical lingo is replaced with tasks centered around reflection and remembrance. 
<br/>The adaptation sought to establish memory of the past as a necessity for a healthy society. Through the framing of remembrance as a treatment, the adaptation implies that an indifference towards history is a grave fault which must be remedied. This adaptation is a direct address to the audience to view memorializing those who sacrificed their lives as a responsibility rather than a tradition.

          </p>
        </Link>



        <Link to="/exhibit" className="card">
          <h3>The Poem as Exhibit</h3>

          <p>

My final adaptation is a digital exhibit which features a three-dimensional model of the poems setting. This adaptation is unique in that it does not hold the hand of the audience; instead they are allowed to explore the environment at their own leisure with ambient noises in the background. This format is similar to a living museum of the poem as it engages the visitors to experience history through their own curiosity and observations.
<br/>This adaptation creates a connection between the audience and the actual history which inspired <em>In Flanders Fields</em>. Through the placement of the audience in the poem's setting, the exhibit expands the poem's message to the circumstances which are crucial to understanding it. This approach puts the audience into an active role and forces them to find their own significance. The intended take-away is that the audience recognizes how McCrae's words were not of some foreign imaginary world, but rather of a real place not too long ago.
          </p>
        </Link>
      

      </section>


<footer className="works-cited">

  <p>
    Malachy O'Connor | English 1102
  </p>

  <h2>Works Cited</h2>

  <p className="citation">
    "In Flanders Fields." <em>The Canadian Encyclopedia</em>, 
    https://thecanadianencyclopedia.ca/en/article/in-flanders-fields.
  </p>

  <p className="citation">
    "World War I Poems: 'In Flanders Fields' and 'The Answer' (1918)."
    <em> Gilder Lehrman Institute of American History</em>, 
    https://www.gilderlehrman.org/history-resources/spotlight-primary-source/world-war-i-poems-flanders-fields-and-answer-1918.
  </p>

  <p className="citation">
    "Veterans Day Poppies." <em>Evergreen Museum</em>, 
    https://www.evergreenmuseum.org/2024/07/30/veterans-day-poppies/.
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