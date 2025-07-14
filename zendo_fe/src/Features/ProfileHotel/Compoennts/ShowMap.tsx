// MapComponent.tsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Container from "../../../Styles";
import useGetHotelByid from "../Hooks/useGetHotelByid";
import { cn } from "../../../libs/cn";

const ShowMap = () => {
  const { hotelById } = useGetHotelByid();

  const latitude = Number(hotelById?.latitude);
  const longitude = Number(hotelById?.longitude);
  if (!latitude && !longitude) {
    return "No Data";
  }

  const position: [number, number] = [
    latitude ? latitude : 24.67592,
    longitude ? longitude : 46.7792,
  ];
  return (
    <div className="my-20" id="Map">
      <div
        className={cn(Container, "bg-white p-5 flex flex-col gap-7 rounded-lg")}
      >
        <div>
          <h1 className="text-2xl font-bold">Address on Map</h1>
        </div>
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>{hotelById?.hotel_name}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default ShowMap;
