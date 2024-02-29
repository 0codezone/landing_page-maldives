import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import PlanTrip from "./components/PlanTrip";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offer />
      <PlanTrip />
    </div>
  );
};

export default App;
