/*CSS*/
import "../../css/home/Home-cards.css";

/*IMAGES*/
import bouquet from "../../images/home/cards/bouquet.png";
import nature from "../../images/home/cards/nature.png";
import pawnshop from "../../images/home/cards/pawn-shop.png";
import heart from "../../images/home/cards/heart.png";

function Sectioncards() {
  return (
    <div className="Sectioncards">
      {/*CARD SECTION*/}
      <section className="card-section">
        <h2>Rooted in Peruvian Heritage</h2>
        <p>
          inspired by Andean traditions, vibrant textiles, and the spirit of
          Andes
        </p>

        {/*CARD CONTAINER*/}
        <div className="card-container">
          {/*CARD 1 LUXURY WEDDINGS*/}
          <div className="card">
            <div>
              <img src={heart} alt="heart" />
            </div>
            <h3>Luxury Weddings</h3>
            <p>Full-scale floral storytelling</p>
          </div>

          {/*CARD 2 HIGH END EVENTS*/}
          <div className="card">
            <div>
              <img src={pawnshop} alt="building with jewels" />
            </div>
            <h3>High- End Events</h3>
            <p>Corporate & Celebrity installations</p>
          </div>

          {/*CARD 3 BESPOKE BOUQUETS*/}
          <div className="card">
            <div>
              <img src={bouquet} alt="bouquet of flowers" />
            </div>
            <h3>Bespoke Bouquets</h3>
            <p>Custom designed arrangements</p>
          </div>

          {/*CARD 4 FLORAL STYLING & CREATIVE DIRECTION*/}
          <div className="card">
            <div>
              <img src={nature} alt="arrangement of flowers" />
            </div>
            <h3>Floral Styling & Creative Direction</h3>
            <p> For photoshoots and brands</p>
          </div>
        </div>
        {/*Review*/}
      </section>
      {/* <Review /> */}
    </div>
  );
}

export default Sectioncards;
