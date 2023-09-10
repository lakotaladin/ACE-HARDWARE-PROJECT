import React, { useState, useEffect } from "react";
import SearchInput from "../components/LocationCard/SearchInput";
import LocationCard from "../components/LocationCard/LocationCard";
import "../pages/location.css";
import Header from "../components/nav/Header";
import Footer from "../components/footer/Footer";
import logo from "./../resources/ace_logo.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const locations = [
  {
    id: 1,
    name: "Lokacija 1",
    description: "Opis lokacije 1",
    adress: "Adresa lokacije 1",
    phone: "123-456-7890",
    work: "Mon-Fri: 7:00am - 6:00pm",
    worksat: "Sat: 8:00am - 5:00pm",
    worksun: "Sun: 9:00am - 4:00pm",
    latitude: 51.505,
    longitude: -0.09,
  },
  {
    id: 2,
    name: "Lokacija 2",
    description: "Opis lokacije 2",
    adress: "Adresa lokacije 2",
    phone: "234-567-8901",
    latitude: 52.505,
    longitude: -0.09,
  },
  {
    id: 3,
    name: "Lokacija 3",
    description: "Opis lokacije 3",
    adress: "Adresa lokacije 3",
    phone: "345-678-9012",
    latitude: 53.505,
    longitude: -0.19,
  },
  {
    id: 4,
    name: "Lokacija 4",
    description: "Opis lokacije 4",
    adress: "Adresa lokacije 4",
    phone: "456-789-0123",
    latitude: 54.505,
    longitude: -0.39,
  },
  {
    id: 5,
    name: "Lokacija 5",
    description: "Opis lokacije 5",
    adress: "Adresa lokacije 5",
    phone: "567-890-1234",
    latitude: 55.505,
    longitude: -0.19,
  },
  {
    id: 6,
    name: "Lokacija 6",
    description: "Opis lokacije 6",
    adress: "Adresa lokacije 6",
    phone: "678-901-2345",
    latitude: 56.505,
    longitude: -0.49,
  },
  {
    id: 7,
    name: "Lokacija 7",
    description: "Opis lokacije 7",
    adress: "Adresa lokacije 7",
    phone: "789-012-3456",
    latitude: 57.505,
    longitude: -0.59,
  },
];

const Location = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationsData, setLocationsData] = useState(locations);

  // Dodajte stanje za praćenje trenutno selektovane lokacije
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState([51.505, -0.09]); // Default centar mape

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

  const handleLocationClick = (location) => {
    // Vrati prethodno selektovanu karticu na primarnu boju
    if (selectedLocation) {
      selectedLocation.isHighlighted = false;
    }

    // Postavi trenutno selektovanu lokaciju i promeni boju kartice
    setSelectedLocation(location);
    location.isHighlighted = true;

    setMapCenter([location.latitude, location.longitude]); // Postavi centar mape na selektovanu lokaciju
  };

  // Postavite prvu lokaciju kao selektovanu po defaultu prilikom prvog renderovanja
  useEffect(() => {
    if (locationsData.length > 0 && !selectedLocation) {
      handleLocationClick(locationsData[0]);
    }
  }, [locationsData, selectedLocation]);

  // Filtriranje lokacija
  const filterLocations = (locationsData, searchTerm) => {
    return locationsData.filter(
      (location) =>
        location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.adress.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredLocations = filterLocations(locationsData, searchTerm);

  return (
    <>
      <Header />
      <div className="global w-100 d-flex flex-row p-0 m-0">
        <div className="p-0" style={{ flex: "20%" }}>
          <div className="w-100 p-3 m-0">
            <b style={{ fontSize: "20px" }}>
              Find Your Local Ace Hardware Store
            </b>
            <SearchInput
              value={searchTerm}
              onChange={handleSearchInputChange}
              onSearch={() => {}}
            />
          </div>
          {filteredLocations.map((location) => (
            <LocationCard
              key={location.id}
              location={location}
              onSelectLocation={handleLocationClick}
              isHighlighted={location.isHighlighted}
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
                  <div className="w-100 p-0 m-0 d-flex flex-row">
                    <div className="m-2">
                      <img
                        style={{ width: "80px", height: "60px" }}
                        src={logo}
                        alt="Ace Hardware logo"
                      />
                    </div>
                    <div className="marker-text p-0 m-0">
                      <b>{selectedLocation.name}</b>
                      <p>{selectedLocation.description}</p>
                      <p>{selectedLocation.adress}</p>
                      <p>{selectedLocation.phone}</p>
                      <div className="w-100 mt-2">
                        <p>{selectedLocation.work}</p>
                        <p>{selectedLocation.worksat}</p>
                        <p>{selectedLocation.worksun}</p>
                      </div>
                    </div>
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
