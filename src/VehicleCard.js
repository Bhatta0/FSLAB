import React from "react";

function VehicleCard() {
  const vehicles = [
    { id: 1, model: "Swift", manufacturer: "Suzuki", year: 2020, fuel: "Petrol" },
    { id: 2, model: "Model S", manufacturer: "Tesla", year: 2022, fuel: "Electric" },
    { id: 3, model: "Fortuner", manufacturer: "Toyota", year: 2021, fuel: "Diesel" },
    { id: 4, model: "i20", manufacturer: "Hyundai", year: 2019, fuel: "Petrol" },
    { id: 5, model: "Harrier", manufacturer: "Tata", year: 2021, fuel: "Diesel" }
  ];

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    margin: "10px",
    display: "inline-block",
    width: "200px",
    textAlign: "center"
  };

  return (
    <div>
      {vehicles.map((v) => (
        <div key={v.id} style={cardStyle}>
          <h3>{v.model}</h3>
          <p>{v.manufacturer}</p>
          <p>{v.year}</p>
          <p>{v.fuel}</p>
        </div>
      ))}
    </div>
  );
}

export default VehicleCard;
