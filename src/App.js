import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import Hero from './components/Hero';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Company logo" />
        <nav className={isMenuOpen ? 'active' : ''}>
          
          <a href="#" className="btn coming-soon-btn">Coming Soon</a>
           </nav>
        
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>
      
      <main>
        <Hero />
      </main>
      <footer className="footer">
        <div className="logo-text">
          <img src={logo} alt="Logo" className="small-logo" />
          <span>| Next Gen Defi Aggregator on Monad</span>
        </div>
        <p>&copy; 2024 Hedgemony</p>
      </footer>
    </div>
  );
};

export default App;
