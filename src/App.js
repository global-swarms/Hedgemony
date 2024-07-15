import React from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Company logo" />
        <div className="header-right">
          <div className="social-icons">
            {/* Add social media icons here */}
          </div>
          <a href="/docs" className="docs-button">Docs</a>
        </div>
      </header>
      <main>
        <section className="hero">
          <h1>
            <span className="typing-effect">Trade</span>
            <span className="typing-effect">Hedge</span>
            <span className="typing-effect">Automate</span>
          </h1>
          <h2>User-Optimized Swap & Yield Aggregation</h2>
          <p>Navigate Volatility with Simplicity & Precision</p>
        </section>
        <section className="under-construction">
          <h2>Under Construction</h2>
          <div className="logo-text">
            <img src={logo} alt="Logo" className="small-logo" />
            <span>| Next Gen Defi Aggregator on Monad</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
