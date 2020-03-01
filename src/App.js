import React, { Suspense } from 'react';

import "./App.css";

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Translation from './components/Translation';
import Work from './components/Work';

function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <Navbar />
        <div className="Translation"><Translation /></div>
        <h1 className='heading-background'>GUANCHEN</h1>
        <div className="Header"><Header /></div>
        <div><About /></div>
        <div className="work"><Work /></div>
        <div className="contact"><Contact /></div>
        <div><Footer /></div>
      </div>
    </Suspense>
  );
}

export default App;
