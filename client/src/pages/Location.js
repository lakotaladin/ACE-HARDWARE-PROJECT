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
    { id: 2, name: "Lokacija 2", description: "Opis lokacije 2" },
    { id: 3, name: "Lokacija 3", description: "Opis lokacije 3" },
    { id: 4, name: "Lokacija 4", description: "Opis lokacije 4" },
    { id: 5, name: "Lokacija 5", description: "Opis lokacije 5" },
    { id: 6, name: "Lokacija 6", description: "Opis lokacije 6" },
    { id: 7, name: "Lokacija 7", description: "Opis lokacije 7" },
  ]);

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const [selectedLocation, setSelectedLocation] = useState(null);

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <>
      <Header />
      <div className="global w-100 d-flex flex-row p-0 m-0">
        <div className="p-3" style={{ flex: "20%" }}>
          <h4>Find Your Local Ace Hardware Store</h4>
          <SearchInput value={searchTerm} onChange={handleSearchInputChange} />
          {filteredLocations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
        <div style={{ flex: "70%", backgroundColor: "blue" }}>
          <MapContainer
            center={[51.505, -0.09]} // Postavite centar mape na željenu latitudu i longitudu
            zoom={13} // Postavite željeni nivo zumiranja
            style={{ width: "100%", height: "100vh" }} // Prilagodite stilove za veličinu mape
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Postavite URL sloja mape
            />

            {selectedLocation && (
              <Marker
                position={[
                  selectedLocation.latitude,
                  selectedLocation.longitude,
                ]}
              >
                <Popup>
                  <div>
                    <h3>{selectedLocation.name}</h3>
                    <p>{selectedLocation.description}</p>
                    {/* Dodajte ostale informacije koje želite prikazati */}
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
