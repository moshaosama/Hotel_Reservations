import DetailsCard from "./Features/Home/Components/DetailsCard";
import FeatureHotels from "./Features/Home/Components/FeatureHotels";
import Hero from "./Features/Home/Components/Hero";
import Footer from "./Layouts/Footer";
import Navbar from "./Layouts/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureHotels />
      <DetailsCard />
      <Footer />
    </>
  );
}

export default App;
