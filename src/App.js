import React from 'react';
import "./App.css";

import Header from './components/Header';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-header"><Header /></div>
    </div>
  );
}

export default App;
