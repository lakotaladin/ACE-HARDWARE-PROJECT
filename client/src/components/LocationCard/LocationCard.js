import React, { useState } from "react";

const LocationCard = ({ location, onSelectLocation }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const cardStyle = {
    backgroundColor: isHighlighted ? "#646464" : "#D1D1D1",
  };

  const handleCardClick = () => {
    // Promeni boju kartice
    setIsHighlighted(!isHighlighted);

    // Pozovi funkciju za selektovanu lokaciju i prosledi trenutnu lokaciju
    onSelectLocation(location);
  };

  return (
    <div
      className={`location-card p-3 ${isHighlighted ? "highlighted" : ""}`}
      style={cardStyle}
      onClick={handleCardClick}
    >
      <b style={{ fontSize: "14px" }}>{location.name}</b>
      <p className="p-0 m-0">{location.description}</p>
      <p className="p-0 m-0">{location.adress}</p>
      <p className="p-0 m-0">{location.phone}</p>
      <u style={{ fontSize: "12px" }}>Store Details</u>
    </div>
  );
};

export default LocationCard;
