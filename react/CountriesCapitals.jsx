import React from 'react';
import './CountriesCapitals.css'

function CountriesCapitals() {
    const countryList = [
        {code: "A", country: "India", capital: "Delhi"},
        {code: "B", country: "Pakistan", capital: "Karachi"}
    ];

    return (
        <div className="cont">
        <fieldset>
            {countryList.map((item) => (
                <div key={item.code}>
                    <h3>{item.country} - <strong>{item.capital}</strong></h3>
                </div>
            ))}
        </fieldset>
        </div>
    );
}

export default CountriesCapitals;