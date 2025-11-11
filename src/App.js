import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Country Flags</h1>
      </header>
      <main>
        <SearchBar />
        <CountryList />
      </main>
    </div>
  );
}

export default App;