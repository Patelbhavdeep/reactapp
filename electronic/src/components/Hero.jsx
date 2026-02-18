import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <span className="badge">Best Prices</span>
        <h1>
          Incredible Prices <br /> on All Your <br /> Favorite Items
        </h1>
        <p>Get more for less on selected brands</p>
        <button>Shop Now</button>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
          alt="Laptop"
        />
      </div>
    </div>
  );
};

export default Hero;
