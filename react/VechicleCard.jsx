import React from "react";

function VehicleCards() {
  const vehicles = [
    { model: "Model S", manufacturer: "Tesla", year: 2024, fuel: "Electric" },
    { model: "Civic", manufacturer: "Honda", year: 2022, fuel: "Petrol" },
    { model: "F-150", manufacturer: "Ford", year: 2023, fuel: "Diesel" },
    { model: "Corolla", manufacturer: "Toyota", year: 2021, fuel: "Hybrid" },
    { model: "X5", manufacturer: "BMW", year: 2022, fuel: "Petrol" }
  ];

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    padding: "20px",
    backgroundColor: "#f4f4f4"
  };

  const cardStyle = {
    flex: "1",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center"
  };

  const headingStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px"
  };

  const textStyle = {
    margin: "5px 0",
    color: "#555"
  };

  return (
    <div style={containerStyle}>
      {vehicles.map((v, index) => (
        <div key={index} style={cardStyle}>
          <div style={headingStyle}>{v.model}</div>
          <div style={textStyle}>Manufacturer: {v.manufacturer}</div>
          <div style={textStyle}>Year: {v.year}</div>
          <div style={textStyle}>Fuel Type: {v.fuel}</div>
        </div>
      ))}
    </div>
  );
};

export default VehicleCards;
