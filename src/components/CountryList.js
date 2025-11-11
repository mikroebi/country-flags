import React, { useEffect } from 'react';
import useStore from '../store/store';
import CountryCard from './CountryCard';

const CountryList = () => {
  const { filteredCountries, loading, error, fetchCountries } = useStore();

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="country-list">
      {filteredCountries.map((country) => (
        <CountryCard key={country.code} country={country} />
      ))}
    </div>
  );
};

export default CountryList;