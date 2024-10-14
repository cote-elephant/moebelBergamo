import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaBookmark, FaShoppingCart, FaEnvelope, FaUser } from 'react-icons/fa';
import '../styles/navbar.css'; // Du kannst hier deine CSS-Datei für die Styling hinzufügen

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
        <NavLink to="/"><FaHome className="nav-icon" /></NavLink >
        </li>
        <li>
          <NavLink to="/Category"><FaBookmark className="nav-icon" /></NavLink>
        </li>
        <li>
          <FaShoppingCart className="nav-icon" />
        </li>
        <li>
        <NavLink to="/Contact"><FaEnvelope className="nav-icon" /></NavLink>
        </li>
        <li>
          {/* <NavLink to="/User"> */}
          <FaUser className="nav-icon" />
          {/* </NavLink> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
