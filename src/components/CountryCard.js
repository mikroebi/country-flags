import React from 'react';

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <img src={country.flag} alt={`${country.name} flag`} />
      <div className="country-info">
        <h2>{country.name}</h2>
        <p>Phone Code: {country.dial_code}</p>
      </div>
    </div>
  );
};

export default CountryCard;