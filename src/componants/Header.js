// /components/Header.js
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/"><h1>Community App</h1></Link>
      </div>
      <div className="header__center">
        <input type="text" placeholder="Search" />
      </div>
      <div className="header__right">
        <Link to="/" className="header__option">Home</Link>
        <Link to="/groups" className="header__option">Groups</Link>
        <Link to="/events" className="header__option">Events</Link>
        <Link to="/profile" className="header__option">Profile</Link>
      </div>
    </div>
  );
}

export default Header;
