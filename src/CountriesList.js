import React from "react";
import "./styles.css"; // external CSS

function CountriesList() {
  const countries = [
    { id: 1, name: "India", capital: "New Delhi" },
    { id: 2, name: "USA", capital: "Washington D.C." },
    { id: 3, name: "Japan", capital: "Tokyo" },
  ];

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.id}>
          {country.name} - {country.capital}
        </li>
      ))}
    </ul>
  );
}

export default CountriesList;
