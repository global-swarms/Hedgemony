import React, { useState, useEffect } from 'react';
import heroImage from '../assets/hero-image.svg';
import logo from '../logo.svg';
import { FaTelegram, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Hero = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Trade', 'Hedge', 'Automate'];
  const period = 2000;

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const handleType = () => {
    const i = loopNum % words.length;
    const fullText = words[i];

    setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), period);
      setTypingSpeed(100);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    } else {
      setTypingSpeed(isDeleting ? 100 : 150);
    }
  };



  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className={menuActive ? 'active' : ''}>
          <div className="nav-content">
            <div className="social-buttons">
              <a href="https://t.me/hedgemony" className="social-btn" target="_blank" rel="noopener noreferrer">
                <FaTelegram />
              </a>
              <a href="https://discord.gg/hedgemony" className="social-btn" target="_blank" rel="noopener noreferrer">
                <FaDiscord />
              </a>
              <a href="https://twitter.com/hedgemony_xyz" className="social-btn" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
            </div>
            <button className="btn coming-soon-btn">Coming Soon</button>
          </div>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="typing-container">
              <h1 className="typing-text">{text}</h1>
            </div>
            <h2>User-Optimized Swap & Yield Aggregation</h2>
            <p>Navigate Volatility with Simplicity & Precision</p>
            <div className="hero-buttons">
              <a href="https://hedgemony.gitbook.io/" className="btn" target="_blank" rel="noopener noreferrer">Documentation</a>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Hero" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
