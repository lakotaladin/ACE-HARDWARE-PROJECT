import React from "react";

const LocationCard = ({ location }) => {
  return (
    <div className="location-card">
      <h3>{location.name}</h3>
      <p>{location.description}</p>
    </div>
  );
};

export default LocationCard;
