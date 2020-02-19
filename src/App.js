import React from 'react';
import "./App.css";

import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-header"><Header /></div>
      <div className="About"><About /></div>
      <div className="work"><Work /></div>
      <div className="contact"><Contact /> <Footer /></div>
    </div>
  );
}

export default App;
