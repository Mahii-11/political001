import { MapContainer, TileLayer, Polygon, Tooltip } from "react-leaflet";
import { thanas } from "../data/thanaData";
import { wards } from "../data/wardData";

const Dhaka7Map = () => {
  return (
    <div className="w-full h-screen">
      <MapContainer
        center={[23.72, 90.395]}
        zoom={13}
        className="h-full w-full"
      >
        {/* Real Map */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Thana Layer */}
        {thanas.map((thana, i) => (
          <Polygon
            key={i}
            positions={thana.coordinates}
            pathOptions={{
              color: "#065f46",
              fillColor: "#6ee7b7",
              fillOpacity: 0.25,
              weight: 2,
            }}
          >
            <Tooltip sticky>
              <div className="text-sm font-semibold">
                <p>থানা: {thana.name}</p>
                <p>মোট ভোটার: {thana.voters.toLocaleString()}</p>
              </div>
            </Tooltip>
          </Polygon>
        ))}

        {/* Ward Layer */}
        {wards.map((ward, i) => (
          <Polygon
            key={i}
            positions={ward.coordinates}
            pathOptions={{
              color: "#14532d",
              fillColor: "#16a34a",
              fillOpacity: 0.6,
              weight: 2,
            }}
          >
            <Tooltip sticky>
              <div className="text-sm font-bold">
                <p>ওয়ার্ড: {ward.ward}</p>
                <p>ভোটার: {ward.voters.toLocaleString()}</p>
              </div>
            </Tooltip>
          </Polygon>
        ))}
      </MapContainer>
    </div>
  );
};

export default Dhaka7Map;
