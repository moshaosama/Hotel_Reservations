import DownloadApp from "../../Components/DownloadApp";
import HeroPages from "../../Components/HeroPages";
import FeatureHotels from "../../Features/Hotels/Components/FeatureHotels";
import { FindHotel } from "../../Features/Hotels/Components/FindHotel";

const Hotels = () => {
  return (
    <>
      <HeroPages
        ImageSrc="https://phptravels.net/assets/img/hotels.jpg"
        Title="Search for best hotels"
        Component={<FindHotel />}
      />
      <FeatureHotels />
      <DownloadApp />
    </>
  );
};

export default Hotels;
