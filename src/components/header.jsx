import React from 'react';
import { Link } from 'react-router-dom';
import "../style.css"; // Import CSS file
import logo from '../../public/shelter-logo.png'; // Import your logo image

const Header = () => {
  return (
    <header>
      <Link to="/">
      <img src={logo} alt="Logo" className="header-logo" />
      </Link>
      <h1>Shelters App</h1>
    </header>
  );
}

export default Header;
