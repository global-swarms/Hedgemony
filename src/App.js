import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const words = ['Trade', 'Hedge', 'Automate'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

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
            {words.map((word, index) => (
              <span
                key={word}
                className={`typing-effect ${index === activeIndex ? 'active' : ''}`}
              >
                {word}
              </span>
            ))}
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
