import DownloadApp from "../../Components/DownloadApp";
import DetailsCard from "../../Features/Home/Components/DetailsCard";
import Hero from "../../Features/Home/Components/Hero";
import FeatureHotels from "../../Features/Hotels/Components/FeatureHotels";

const Home = () => {
  return (
    <>
      <Hero />
      <FeatureHotels />
      <DetailsCard />
      <DownloadApp />
    </>
  );
};

export default Home;
