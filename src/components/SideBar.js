import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';
import googleLogo from '../assets/google-logo.png';
import appleLogo from '../assets/apple-logo.png';
import logo from '../assets/logo.png';
import { handleGoogleSignIn } from './Auth'; // Import the Google Sign-In function

const SideBar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>&times;</button>
      <img src={logo} alt="BX Marketplace Logo" className="sidebar-logo" />
      <nav className="sidebar-nav">
        <NavLink to="/" exact onClick={toggleSidebar} className="sidebar-link">Home</NavLink>
        <a href="#our-values" onClick={toggleSidebar} className="sidebar-link">Our Values</a>
        <NavLink to="/help" onClick={toggleSidebar} className="sidebar-link">Help</NavLink>
      </nav>
      <div className="auth-buttons">
        <button className="auth-button google" onClick={handleGoogleSignIn}>
          <img src={googleLogo} alt="Google Logo" />
          Sign up with Google
        </button>
        <button className="auth-button apple" onClick={() => alert('Sign up with Apple not implemented yet')}>
          <img src={appleLogo} alt="Apple Logo" />
          Sign up with Apple
        </button>
      </div>
    </div>
  );
};

export default SideBar;
