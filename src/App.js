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
          <a href="https://hedgemony.gitbook.io/hedgemony/protocol-map-and-example" className="nav-link">How it works</a>
          <a href="https://hedgemony.gitbook.io/hedgemony/glossary-of-key-terms" className="nav-link">Key Terms</a>
          <a href="https://hedgemony.gitbook.io/hedgemony/hedgemony-foundation" className="nav-link">Governance</a>
        </nav>
        <a href="#" className="btn coming-soon-btn">Coming Soon</a>
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
        <h2>Website under construction</h2>
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
