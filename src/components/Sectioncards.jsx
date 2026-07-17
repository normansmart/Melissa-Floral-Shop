import "../css/home/Home-cards.css";
import "../css/home/Home-review.css";

import bouquet from "../images/home/cards/bouquet.png";
import nature from "../images/home/cards/nature.png";
import pawnshop from "../images/home/cards/pawn-shop.png";
import heart from "../images/home/cards/heart.png";

function Sectioncards() {
  return (
    <div className="Sectioncards">
      <section className="card-section">
        <h2>Rooted in Peruvian Heritage</h2>
        <p>
          inspired by Andean traditions, vibrant textiles, and the spirit of
          Andes
        </p>
        <div className="card-container">
          <div className="card">
            <div>
              <img src={heart} alt="heart" />
            </div>
            <h3>Luxury Weddings</h3>
            <p>Full-scale floral storytelling</p>
          </div>
          <div className="card">
            <div>
              <img src={pawnshop} alt="building with jewels" />
            </div>
            <h3>High- End Events</h3>
            <p>Corporate & Celebrity installations</p>
          </div>
          <div className="card">
            <div>
              <img src={bouquet} alt="bouquet of flowers" />
            </div>
            <h3>Bespoke Bouquets</h3>
            <p>Custom designed arrangements</p>
          </div>
          <div className="card">
            <div>
              <img src={nature} alt="arrangement of flowers" />
            </div>
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
    </div>
  );
}

export default Sectioncards;
