import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="top-bar">
        <p> Free Shipping for orders over $50</p>
        <div className="top-links">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Help Center</a>
          <a href="#">Call Us 123-456-7890</a>
        </div>
      </div>

      
      <div className="main-nav">
        <h2 className="logo">TechShed</h2>

        <ul className="menu">
          <li>Shop All</li>
          <li>Computers</li>
          <li>Tablets</li>
          <li>Drones & Cameras</li>
          <li>Audio</li>
          <li>Mobile</li>
          <li>TV & Home Cinema</li>
          <li>Wearable Tech</li>
          <li className="sale">Sale</li>
        </ul>

        <div className="icons">
          🔍 👤 🤍 🛒
        </div>
      </div>
    </>
  );
};

export default Navbar;
