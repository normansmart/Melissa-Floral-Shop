/*COMPONENTS*/
import Quadrant from "../components/home/Quadrant";
import Sectioncards from "../components/home/Sectioncards";
import Review from "../components/home/Review";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div className="Homepage">
      {/*The two sections of writing and the images*/}
      <Quadrant />

      {/*SIGNATURE CREATIONS*/}
      <h3>Signature Creations</h3>

      {/*CARDS AND H2 + P*/}
      <Sectioncards />

      {/*REVIEW FROM JOHN AND SARAH*/}
      <Review />

      {/*FOOTER AND ADDRESS*/}
      <Footer />
    </div>
  );
}

export default Homepage;
