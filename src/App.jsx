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
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae assumenda quod similique, modi autem voluptas porro adipisci suscipit fugit asperiores quaerat nobis tempora provident ipsa! Quas quaerat, delectus quo ea vel alias numquam velit laborum at nihil. Voluptatem autem culpa delectus eligendi adipisci earum unde corrupti voluptatum ab facere. Architecto eaque quisquam pariatur sequi eius in labore, veniam ab minus repudiandae voluptates quae odio excepturi maxime magni voluptatem quo dolorum nisi ratione, ea doloribus placeat laborum. Voluptatum, cum. Doloribus dicta ducimus accusamus officiis modi cumque et distinctio, ea sint impedit dolorum quam ipsa est dolorem exercitationem reprehenderit perspiciatis cum provident temporibus excepturi! Iusto ullam mollitia ducimus possimus repellat inventore, porro pariatur corporis voluptas iure, ratione dolores harum incidunt temporibus! Soluta voluptates, perferendis impedit error repellat beatae nam at magni cumque omnis optio voluptatem dignissimos praesentium eum aliquid corrupti culpa molestiae unde dolores ipsam sunt tempore amet magnam id! Illo maxime fugit est distinctio enim nam tempore rem atque odio recusandae officiis porro ullam placeat possimus asperiores numquam minima voluptate ipsam illum, natus eos explicabo magnam laborum? Et laudantium sint deleniti ratione non provident fugit vero sed culpa labore voluptatibus velit deserunt quidem officia unde minima molestiae voluptatum, aliquid esse corporis!
          </p>

          <p>
          </p>

          <h3>Project Purpose</h3>




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
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eum voluptates fugit ullam laborum quaerat repudiandae ipsam magnam, saepe eligendi rem vel cum esse modi, quasi voluptatibus officia atque. Quibusdam, sed laboriosam accusantium adipisci asperiores praesentium quisquam vitae est dolor vel ut nobis omnis similique, atque ab. Nemo quasi animi quia deserunt suscipit praesentium beatae amet soluta ipsa exercitationem! In laboriosam atque iure autem ipsa nobis accusantium temporibus repellat. Dolorum, facere quis quidem neque maiores alias tenetur ducimus autem cupiditate vero, sapiente esse quasi culpa molestias doloremque est commodi? Nisi esse obcaecati debitis amet qui molestias dignissimos molestiae eum. Assumenda suscipit eius, quidem ducimus libero sit fugit quos quia in praesentium fugiat numquam, incidunt molestias vero accusamus? Provident esse beatae consequatur doloribus veritatis doloremque soluta odio porro sit aperiam, ad quo nesciunt quas dolorem reiciendis dicta minus sequi mollitia facere officiis neque aliquid modi atque illum! Debitis ut facilis, illum assumenda doloribus quam obcaecati voluptas, sed, aperiam nesciunt officia mollitia eveniet quia voluptatibus iure. Quam facilis fuga veritatis et. Qui quos accusamus architecto ea est fuga enim quam possimus aperiam autem rem ab, praesentium voluptas voluptates, accusantium suscipit velit corrupti nemo officia cum dicta quasi ratione ad quae! Hic, fugiat.          </p>
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