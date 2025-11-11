import React from 'react';
import useStore from '../store/store';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useStore();

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;