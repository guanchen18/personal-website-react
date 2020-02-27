import React from 'react';
import "./App.css";

import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className='heading-background'>GUANCHEN</h1>
      <div className="Header"><Header /></div>
      <div className="About"><About /></div>
      <div className="work"><Work /></div>
      <div className="contact"><Contact /></div>
    </div>
  );
}

export default App;
