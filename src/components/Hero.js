import React, { useState, useEffect } from 'react';
import heroImage from '../assets/hero-image.svg';
import logo from '../logo.svg';
import { FaTelegram, FaDiscord, FaTwitter } from 'react-icons/fa';

const Hero = () => {
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
   
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="typing-container">
              <h1 className="typing-text">{text}</h1>
            </div>
            <h2>User-Optimized Swap & Yield Aggregation</h2>
            <p>Navigate Volatility with Simplicity & Precision</p>
            <div className="hero-buttons">
              <div className="social-buttons">
                <a href="https://t.me/YourTelegramLink" className="social-btn" target="_blank" rel="noopener noreferrer">
                  <FaTelegram />
                </a>
                <a href="https://discord.gg/YourDiscordLink" className="social-btn" target="_blank" rel="noopener noreferrer">
                  <FaDiscord />
                </a>
                <a href="https://twitter.com/YourTwitterHandle" className="social-btn" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </div>
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
