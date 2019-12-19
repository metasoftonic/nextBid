import React from 'react';
import SearchBar from '../Search/SearchBar';
import DisplayList from '../SearchList/DisplayList';
import './app.css';

function App() {
  return (
    <div className="App">
      <h2>Simple App to Fetch Dutch Address</h2>
      <SearchBar />
      <div className="container">
        <DisplayList />
      </div>
    </div>
  );
}

export default App;
