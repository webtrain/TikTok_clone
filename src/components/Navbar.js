import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/tiktok_logo.svg';
import Avatar from '../img/avataaars.svg';
import Upload from '../img/upload.png';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-items">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="links">
            <Link to="/upload">
              <img src={Upload} alt="upload" />
            </Link>
            <Link to="/upload">
              <img src={Avatar} alt="avatar" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
