import React from 'react';
import './App.css';
import logo from './logo.svg';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Company logo" />
        <nav>
          <a href="#" className="nav-link">Products</a>
          <a href="#" className="nav-link">Developers</a>
          <a href="#" className="nav-link">Governance</a>
          <a href="#" className="nav-link">Security</a>
        </nav>
        <a href="/docs" className="docs-button">Launch App</a>
      </header>
      <main>
        <Hero />
      </main>
      <footer className="footer">
        <div className="logo-text">
          <img src={logo} alt="Logo" className="small-logo" />
          <span>Next Gen Defi Aggregator on Monad</span>
        </div>
        <p>&copy; 2023 Hedgemony. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
