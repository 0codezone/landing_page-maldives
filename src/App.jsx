import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import PlanTrip from "./components/PlanTrip";
import Rooms from "./components/Rooms";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offer />
      <PlanTrip />
      <Rooms />
    </div>
  );
};

export default App;
