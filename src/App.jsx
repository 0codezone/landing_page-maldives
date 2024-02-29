import Hero from "./components/Hero";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import PlanTrip from "./components/PlanTrip";
import Rooms from "./components/Rooms";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offer />
      <PlanTrip />
      <Rooms />
      <ImageSlider />
      <Footer />
    </div>
  );
};

export default App;
