import React from 'react';
import { FaHome, FaBookmark, FaShoppingCart, FaEnvelope, FaUser } from 'react-icons/fa';
import './Navbar.css'; // Du kannst hier deine CSS-Datei für die Styling hinzufügen

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <FaHome className="nav-icon" />
        </li>
        <li>
          <FaBookmark className="nav-icon" />
        </li>
        <li>
          <FaShoppingCart className="nav-icon" />
        </li>
        <li>
          <FaEnvelope className="nav-icon" />
        </li>
        <li>
          <FaUser className="nav-icon" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
