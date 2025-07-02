import Container from "../../Styles";
import HotelDescription from "../../Features/FilterHotels/Components/HotelDescription";
import FilterationData from "../../Features/FilterHotels/Components/FilterationData";

const FilterHotels = () => {
  return (
    <div className={Container}>
      <HotelDescription />
      <FilterationData />
    </div>
  );
};

export default FilterHotels;
