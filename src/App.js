import React from "react";
import VehicleCard from "./VehicleCard.js";
import LandmarksGrid from "./LandmarksGrid.js";
import UserStatusSwitcher from "./UserStatusSwitcher.js";

function App() {
  return (
    <div>
      <h1>Vehicle Info Cards</h1>
      <VehicleCard />
      <h2>Landmarks Grid</h2>
      <LandmarksGrid />
      <h3>User Status Switcher</h3>
      <UserStatusSwitcher />
    </div>
  );
}

export default App;

