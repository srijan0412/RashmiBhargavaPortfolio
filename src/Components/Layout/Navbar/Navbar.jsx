// import React from 'react'
import { Link } from "react-router-dom";
import { RashmiLogo } from "../../../Assets";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="" id="logo">
        <img src={RashmiLogo} alt="Rashmi Bhargava" />
      </Link>
      <div className="navbar_right">
        <ul className="nav_links">
          <li>
            <Link to="" className="link_element">Home</Link>
          </li>
          <li>
            <Link to="about" className="link_element">About</Link>
          </li>
          <li>
            <Link to="contact" className="link_element">Contact</Link>
          </li>
        </ul>
        <ul className="social_links">
          <li>
            <a href="">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li>
            <a href="">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li>
            <a href="">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </li>
          <li>
            <a href="">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li>
            <a href="">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
