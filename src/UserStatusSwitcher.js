import React, { useState } from "react";

function UserStatusSwitcher() {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2 style={{ color: isOnline ? "green" : "red" }}>
        Status: {isOnline ? "Online" : "Offline"}
      </h2>
      <button onClick={() => setIsOnline(!isOnline)}>
        {isOnline ? "Go Offline" : "Go Online"}
      </button>
    </div>
  );
}

export default UserStatusSwitcher;
