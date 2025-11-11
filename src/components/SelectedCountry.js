import React from 'react';
import useStore from '../store/store';

const SelectedCountry = () => {
  const { selectedCountry } = useStore();

  if (!selectedCountry) {
    return (
      <div className="selected-country-placeholder">
        Select a country to see details
      </div>
    );
  }

  return (
    <div className="selected-country-card">
      <img src={selectedCountry.flag} alt={`${selectedCountry.name} flag`} className="selected-flag" />
      <h2>{selectedCountry.name}</h2>
      <div className="country-details">
        <p><strong>Phone Code:</strong> {selectedCountry.dial_code}</p>
        <p><strong>Capital:</strong> {selectedCountry.capital}</p>
        <p><strong>Population:</strong> {selectedCountry.population}</p>
        <p><strong>Region:</strong> {selectedCountry.region}</p>
      </div>
    </div>
  );
};

export default SelectedCountry;