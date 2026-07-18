/*CSS*/
import "../../css/home/Home-quadrant.css";

/*IMAGES*/
import flowerpack from "../../images/home/quadrant/flower-pack.jpg";
import flowerstand from "../../images/home/quadrant/flowers-stand.jpg";

function Quadrant() {
  return (
    <div className="Quadrant">
      {/*HEADER*/}
      <header className="Homepage-header">
        <div className="header-container">
          {/*H1 + PARAGRAPH*/}
          <div className="h1-container">
            <h1>Flores Con Fuego.</h1>
            <p>
              Luxury Floral Design rooted in Peruvian soul, blooming in the
              desert of Las Vegas.
            </p>
          </div>

          {/*FIRST IMAGE*/}
          <div className="image-container">
            <img src={flowerpack} alt="placeholder" />
          </div>
        </div>
      </header>

      {/*HERO*/}
      <section>
        <div className="section-container">
          {/*SECOND IMAGE*/}
          <div className="image-container">
            <img src={flowerstand} alt="placeholder" />
          </div>

          <div className="hero-container">
            {/*H2 + PARAGRAPH + PARAGRAPH*/}
            <h2>From Peru to the desert.</h2>
            <p>
              Born in the heart of Peru, now designing in the heart of Las
              Vegas.
            </p>

            <p>
              Blending Andean blooms with bold, modern elegance, I bring passion
              and artistry to the desert’s most exquisite events.
            </p>

            {/*QUOTE IN THE FOURTH SQUARE*/}
            <div className="flower-quote">
              <blockquote>
                &quot;Flowers should feel like poetry, not decoration.&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Quadrant;
