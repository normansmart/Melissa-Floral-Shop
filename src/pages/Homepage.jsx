import "./Homepage.css";
import image from "../images/image.png";

function Homepage() {
  return (
    <div className="Homepage">
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
            <img src={image} alt="placeholder" />
          </div>
        </div>
      </header>
      {/*HERO*/}
      <section>
        <div className="section-container">
          <div className="image-container">
            <img src={image} alt="placeholder" />
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
      {/*CARDS*/}
      <section className="card-section">
        <h2>Rooted in Peruvian Heritage</h2>
        <p>
          inspired by Andean traditions, vibrant textiles, and the spirit of
          Andes
        </p>
        <div className="card-container">
          <div className="card">
            <h3>Luxury Weddings</h3>
            <p>Full-scale floral storytelling</p>
          </div>
          <div className="card">
            <h3>High- End Events</h3>
            <p>Corporate & Celebrity installations</p>
          </div>
          <div className="card">
            <h3>Bespoke Bouquets</h3>
            <p>Custom designed arrangements</p>
          </div>
          <div className="card">
            <h3>Floral Styling & Creative Direction</h3>
            <p> For photoshoots and brands</p>
          </div>
        </div>
        <div className="quote-container">
          <blockquote>
            <p>
              &quot;Her Arrangements transformed our wedding into pure
              art.&quot;
            </p>
            <p>John and Sarah</p>
          </blockquote>
        </div>
      </section>
      {/*FOOTER*/}
      <footer>
        {/*ADDRESS*/}

        <address>
          <div className="address-container">
            <div className="address">
              <a href="mailto: youremail@live.com">youremail@live.com</a>
            </div>
            <div className="address">
              <a href="tel: +17027228654">702-722-8654</a>
            </div>
            <div className="address">
              <p>princessfloral90s</p>
            </div>{" "}
          </div>
        </address>
      </footer>
    </div>
  );
}

export default Homepage;
