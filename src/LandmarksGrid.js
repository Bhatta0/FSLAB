import React from "react";
import "./landmarks.css"; // Import external CSS

function LandmarksGrid() {
  const landmarks = [
    { id: 1, name: "Eiffel Tower", location: "Paris" },
    { id: 2, name: "Statue of Liberty", location: "USA" },
    { id: 3, name: "Taj Mahal", location: "India" }
  ];

  return (
    <div className="grid">
      {landmarks.map((land) => (
        <div key={land.id} className="card">
          <h3>{land.name}</h3>
          <p>{land.location}</p>
        </div>
      ))}
    </div>
  );
}

export default LandmarksGrid;
