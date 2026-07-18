import Navigation from "../components/Navigation";
import Quadrant from "../components/home/Quadrant";
import Sectioncards from "../components/home/Sectioncards";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div className="Homepage">
      {/*The two sections of writing and the images*/}
      <Quadrant />
      {/*CARDS and h2 and the quote*/}
      <Sectioncards />

      <Footer />
    </div>
  );
}

export default Homepage;
