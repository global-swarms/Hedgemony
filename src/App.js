import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const words = ['Trade', 'Hedge', 'Automate'];
  const deletingSpeed = 100;
  const waitTime = 1000;

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  const handleType = () => {
    const i = loopNum % words.length;
    const fullText = words[i];

    setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), waitTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    setTypingSpeed(isDeleting ? deletingSpeed : 150);
  };

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
            <span className="typing-effect">{text}</span>
          </h1>
          <h2>User-Optimized Swap & Yield Aggregation</h2>
          <p>Navigate Volatility with Simplicity & Precision</p>
          
        </section>
      </main>
      <footer className="footer under-construction">
      <h2>Website Under Construction</h2>
          <div className="logo-text">
            <img src={logo} alt="Logo" className="small-logo" />
            <span>| Next Gen Defi Aggregator on Monad</span>
          </div>
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
