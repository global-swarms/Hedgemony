import React from 'react';

const Hero = () => {
  const heroStyle = {
    backgroundImage: "url('/hero-background.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className="hero" style={heroStyle}>
      <div className="hero-content">
        <h1>Hedgemony</h1>
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
