function Homepage() {
  return (
    <div className="Homepage">
      {/*HEADER*/}
      <header className="Homepage-header">
        <h1>Flores Con Fuego.</h1>
        <p>
          Luxury Floral Design rooted in Peruvian soul, blooming in the desert
          of Las Vegas.
        </p>
      </header>
      {/*HERO*/}
      <section>
        <h2>From Peru to the desert.</h2>
        <p>
          Born in the heart of Peru, now designing in the heart of Las Vegas.
        </p>
        <p>
          Blending Andean blooms with bold, modern elegance, I bring passion and
          artistry to the desert’s most exquisite events.
        </p>
        <blockquote>
          &quot;Flowers should feel like poetry, not decoration.&quot;
        </blockquote>
        <h3>Signature Creations</h3>
      </section>
      {/*CARDS*/}
      <section>
        <h2>Rooted in Peruvian Heritage</h2>
        <p>
          inspired by Andean traditions, vibrant textiles, and the spirit of
          Andes
        </p>
        <h3>Luxury Weddings</h3>
        <p>Full-scale floral storytelling</p>
        <h3>High- End Events</h3>
        <p>Corporate & Celebrity installations</p>
        <h3>Bespoke Bouquets</h3>
        <p>Custom designed arrangements</p>
        <h3>Floral Styling & Creative Direction</h3>
        <p> For photoshoots and brands</p>
        <blockquote>
          &quot;Her Arrangements transformed our wedding into pure art.&quot;
          <span>John and Sarah</span>
        </blockquote>
      </section>
      {/*FOOTER*/}
      <footer>
        {/*ADDRESS*/}
        <address>
          <a href="mailto: youremail@live.com">youremail@live.com</a>
          <a href="tel: +17027228654">702-722-8654</a>
          <p>princessfloral90s</p>
        </address>
      </footer>
    </div>
  );
}

export default Homepage;
