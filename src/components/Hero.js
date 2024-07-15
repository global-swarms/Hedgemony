import React, { useState, useEffect } from 'react';

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
    <section className="hero">
      <div className="hero-content">
        <div className="typing-container">
          <h1 className="typing-text">{text}</h1>
        </div>
        <h2>User-Optimized Swap & Yield Aggregation</h2>
        <p>Navigate Volatility with Simplicity & Precision</p>
        <div className="hero-buttons">
          <a href="#" className="btn btn-primary">Documentation</a>
        </div>
      </div>
      <div className="hero-image">
        {/* Add an image or animation here */}
      </div>
    </section>
  );
};

export default Hero;
