// ***************************************************

import React, { useState } from "react";
import cities from "./cities.json";
import "./index.css";

const CityAutocomplete = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input) {
      const filteredCities = cities.filter((city) => city.startsWith(input));
      setSuggestions(filteredCities);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (city) => {
    setQuery(city);
    setSuggestions([]);
  };

  return (
    <div>
      <input
        id="input1"
        className="input"
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Enter a city name"
      />
      <h3>please enter a city name</h3>

      <ul>
        {suggestions.map((city, index) => (
          <li key={index} onClick={() => handleSelect(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityAutocomplete;
