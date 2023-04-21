import React from 'react';
import {
  FaHome
} from "react-icons/fa";
import { Link } from 'react-router-dom'; // Assuming you're using React Router for routing
import "./navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Brain</Link>
        <Link to="/">Painter</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/"><FaHome>Home</FaHome>
            <i className="FaHome"></i>
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <button className="logout-button">Logout</button>
    </nav>
  );
}

export default Navbar;
