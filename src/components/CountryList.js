import React, { useEffect } from 'react';
import useStore from '../store/store';
import SearchBar from './SearchBar';

const CountryList = () => {
  const { filteredCountries, loading, error, fetchCountries, selectCountry } = useStore();

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="country-selector">
      <h2 className="selector-title">Select Your Country</h2>
      <SearchBar />
      <ul className="country-list-scrollable">
        {filteredCountries.map((country) => (
          <li 
            key={country.code} 
            className="country-list-item" 
            onClick={() => selectCountry(country.code)}
          >
            <img src={country.flag} alt={`${country.name} flag`} className="list-item-flag" />
            <span className="list-item-name">{country.name}</span>
            <span className="list-item-code">{country.dial_code}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;