import React from 'react';
import './SideNav.css'; 
import logo from '../images/log.png';
import search from '../images/search.png';
import sidebar from '../images/sidebar-right.png';
import edi from '../images/edit.png';
import doted from '../images/dot.png';



function Sidebar({ isOpen, toggleSidebar }) {
    return (
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content"> 

        <div className='sidenavnav'>
          <a className="close-button" onClick={toggleSidebar}>
            <img src={sidebar} alt="Close" /> 
          </a>

          
          <div className="sidebar-icons"> 
            <img src={search} alt="side" className="nav-icon" />
            <img src={edi} alt="edit" className="nav-icon" />
          </div>
        </div>
  

  
          <div className="logoN"> 
            <img src={logo} alt="User Avatar" />
            <span className="logo-name">Genio AI</span>
          </div>

          <div className="history">

            <h3>History</h3>

            <div className="history-group"> 
              <h4>Today</h4>
              <ul>
                <li>Lorem ipsum dolor sit amet 
                    <img src={doted} alt='dotic' className="doted-icon"/>
                </li>

                <li>Lorem ipsum dolor</li>
              </ul>
            </div>

            <div className="history-group">
              <h4>Yesterday</h4>
              <ul>
                <li>Lorem ipsum dolor sit
                  <img src={doted} alt='dotic' className="doted-icon"/>  
                </li>
                <li>Lorem ipsum</li>
              </ul>
            </div>

            <div className="history-group">
              <h4>Past 7 days</h4>
              <ul>
                <li>Lorem ipsum dolor sit amet
                  <img src={doted} alt='dotic' className="doted-icon"/>  
                </li>
                <li>Classification Request</li>
              </ul>
            </div>

            <div className="history-group"> 
              <h4>Past 30 days</h4>
              <ul>
                <li>Lorem ipsum dolor</li>
                <li>Lorem</li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    );
  }

export default Sidebar;