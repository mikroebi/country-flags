import React from 'react';
import './App.css';
import CountryList from './components/CountryList';
import SelectedCountry from './components/SelectedCountry';

function App() {
  return (
    <div className="app-container">
      <div className="main-content">
        <CountryList />
        <SelectedCountry />
      </div>
    </div>
  );
}

export default App;