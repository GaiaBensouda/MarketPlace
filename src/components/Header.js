// src/components/Header.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import SideBar from './SideBar'; // Import the sidebar component
import logo from '../assets/logo.png';

function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header__left">
          <img src={logo} alt="BX Marketplace Logo" className="header__logo" />
          <h1 className="header__title">BX Marketplace</h1>
        </div>
        <nav className="header__nav">
          <NavLink to="/" exact className="header__link" activeClassName="header__link--active">Home</NavLink>
          <NavLink to="/listings" className="header__link" activeClassName="header__link--active">Sell & Buy</NavLink>
          <NavLink to="/top-users" className="header__link" activeClassName="header__link--active">Top Users</NavLink>
        </nav>
        <div className="menu-toggle" onClick={toggleSidebar}>
          <div className="menu-icon">☰</div>
        </div>
      </header>
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}

export default Header;
