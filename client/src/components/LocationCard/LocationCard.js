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
    <div className="location-card" style={cardStyle} onClick={handleCardClick}>
      <h3>{location.name}</h3>
      <p className="p-0 m-0">{location.description}</p>
    </div>
  );
};

export default LocationCard;
