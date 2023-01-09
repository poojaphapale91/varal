import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
  }, []);
  return (
    <div className="header">
      <div className="logo">
        <img
          src={process.env.PUBLIC_URL + "/Assets/Group 114.png"}
          alt="logo"
        />
      </div>
      <nav className="navbar">
        {(toggleMenu || screenWidth > 500) && (
          <ul className="list">
            <li className="item">
              <a href="/">Home</a>
            </li>
            <li className="item">
              <a href="/about"> Services</a>
            </li>
            <li className="item">
              <a href="/contact">Pricing</a>
            </li>
            <li className="item">
              <a href="/contact">About Us</a>
            </li>
            <li className="item">
              <div className="company">Start a Company </div>
            </li>
          </ul>
        )}

        <button className="btn" onClick={toggleNav}>
          Menu
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
