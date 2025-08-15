import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const containerStyle = {
    textAlign: "center",
    marginTop: "30px"
  };

  const buttonStyle = {
    padding: "8px 15px",
    margin: "5px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  };

  const countStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px"
  };

  return (
    <div style={containerStyle}>
      <div style={countStyle}>Count: {count}</div>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button style={buttonStyle} onClick={() => setCount(count - 1)}>
        Decrease
      </button>
      <button style={buttonStyle} onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
