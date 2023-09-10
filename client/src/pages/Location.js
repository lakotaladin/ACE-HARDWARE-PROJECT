import React, { useState } from "react";
import SearchInput from "../components/LocationCard/SearchInput";
import LocationCard from "../components/LocationCard/LocationCard";
import "../pages/location.css";
import Header from "../components/nav/Header";
import Footer from "../components/footer/Footer";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Location = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locations, setLocations] = useState([
    {
      id: 1,
      name: "Lokacija 1",
      description: "Opis lokacije 1",
      latitude: 51.505,
      longitude: -0.09,
    },
    {
      id: 2,
      name: "Lokacija 2",
      description: "Opis lokacije 2",
      latitude: 52.505,
      longitude: -0.09,
    },
    {
      id: 3,
      name: "Lokacija 3",
      description: "Opis lokacije 3",
      latitude: 53.505,
      longitude: -0.19,
    },
    {
      id: 4,
      name: "Lokacija 4",
      description: "Opis lokacije 4",
      latitude: 54.505,
      longitude: -0.39,
    },
    {
      id: 5,
      name: "Lokacija 5",
      description: "Opis lokacije 5",
      latitude: 55.505,
      longitude: -0.19,
    },
    {
      id: 6,
      name: "Lokacija 6",
      description: "Opis lokacije 6",
      latitude: 56.505,
      longitude: -0.49,
    },
    {
      id: 7,
      name: "Lokacija 7",
      description: "Opis lokacije 7",
      latitude: 57.505,
      longitude: -0.59,
    },
  ]);

  const L = require("leaflet");

  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState([51.505, -0.09]); // Default centar mape

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    setMapCenter([location.latitude, location.longitude]); // Postavi centar mape na selektovanu lokaciju
  };

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="global w-100 d-flex flex-row p-0 m-0">
        <div className="p-0" style={{ flex: "20%" }}>
          <div className="search-div p-3 m-0">
            <h4>Find Your Local Ace Hardware Store</h4>

            <SearchInput
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
          </div>
          {filteredLocations.map((location) => (
            <LocationCard
              key={location.id}
              location={location}
              onSelectLocation={handleLocationClick}
            />
          ))}
        </div>
        <div style={{ flex: "70%", backgroundColor: "blue" }}>
          <MapContainer
            center={mapCenter}
            zoom={13}
            style={{ width: "100%", height: "100vh" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {selectedLocation && (
              <Marker
                cancelable={true}
                draggable={false}
                position={[
                  selectedLocation.latitude,
                  selectedLocation.longitude,
                ]}
              >
                <Popup>
                  <div>
                    <h3>{selectedLocation.name}</h3>
                    <p>{selectedLocation.description}</p>
                  </div>
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Location;
