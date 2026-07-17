import "../css/home/Home-quadrant.css";

import flowerpack from "../images/home/quadrant/flower-pack.jpg";
import flowerstand from "../images/home/quadrant/flowers-stand.jpg";

function Quadrant() {
  return (
    <div className="Quadrant">
      {/*HEADER*/}
      <header className="Homepage-header">
        <div className="header-container">
          <div className="h1-container">
            <h1>Flores Con Fuego.</h1>
            <p>
              Luxury Floral Design rooted in Peruvian soul, blooming in the
              desert of Las Vegas.
            </p>
          </div>
          <div className="image-container">
            <img src={flowerpack} alt="placeholder" />
          </div>
        </div>
      </header>

      {/*HERO*/}
      <section>
        <div className="section-container">
          <div className="image-container">
            <img src={flowerstand} alt="placeholder" />
          </div>
          <div className="hero-container">
            <h2>From Peru to the desert.</h2>
            <p>
              Born in the heart of Peru, now designing in the heart of Las
              Vegas.
            </p>

            <p>
              Blending Andean blooms with bold, modern elegance, I bring passion
              and artistry to the desert’s most exquisite events.
            </p>

            <div className="flower-quote">
              <blockquote>
                &quot;Flowers should feel like poetry, not decoration.&quot;
              </blockquote>
            </div>
          </div>
        </div>
        <h3>Signature Creations</h3>
      </section>
    </div>
  );
}

export default Quadrant;
