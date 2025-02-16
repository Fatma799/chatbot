import React, { useState } from 'react';
import './Home.css'; 
import logo from '../images/log.png';
import navBarleft from  '../images/sidebar-right.png';
import edit from '../images/edit.png';
import upgrade from '../images/upgrade.png';
import userImg from '../images/userph.png';



function MainNav({toggleSidebar}) {

  return (
    <nav className="navbar"> 
      <div className="navbar-content">
        <div className="navBar-left">
          <a href="#"  onClick={toggleSidebar} className="nav-icon-button">
            <img src={navBarleft} alt="side" className="nav-icon " /> 
          </a>
          <a href="#" className='side'>
            <img src={edit} alt="edit" className="nav-icon" /> 
          </a>
          <div className="logoContainer">
            <img src={logo} alt="logo" className="logo" /> 
            <span className="app-name">Genio AI</span>
          </div>
        </div>

        <div className="navbar-right">
          <button className="upgrade-button"> 
            <img src={upgrade} alt="Upgrade" className="upgrade-icon" />
            Upgrade
          </button>
          <img src={userImg} alt="yourphoto" className="user-avatar" /> 
        </div>
      </div>
    </nav>
  );
}

export default MainNav;