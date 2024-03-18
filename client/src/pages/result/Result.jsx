import React from 'react';
import './result.css';
import { useNavigate} from 'react-router-dom';
import { useEffect,useRef} from 'react';
import Navbar from '../../components/navbar/Navbar';
import TrendGraph from '../../components/trendGraph/TrendGraph';
/* eslint-disable no-undef */


const Result = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <Navbar result={true}/>

      <aside id="sidebar">
        <div class="sidebar-title">
          <div class="sidebar-brand">
            <span class="material-icons-outlined">Username</span> 
          </div>
          <span class="material-icons-outlined" onclick="closeSidebar()">close</span>
        </div>

        <ul class="sidebar-list">
          <li class="sidebar-list-item">
            <a href="#" target="_blank">
              <span class="material-icons-outlined">Profile</span>
            </a>
          </li>
          <li class="sidebar-list-item">
            <a href="#" target="_blank">
              <span class="material-icons-outlined">History</span>
            </a>
          </li>
          
          <li class="sidebar-list-item">
            <a href="#" target="_blank">
              <span class="material-icons-outlined">Settings</span>
            </a>
          </li>
        
          <li class="sidebar-list-item">
            <a href="#" target="_blank">
              <span class="material-icons-outlined">Logout</span>
            </a>
          </li>
        </ul>
      </aside>

      <div class="grid-container">

        <header class="header">
          <div class="menu-icon" onclick="openSidebar()">
            <span class="material-icons-outlined">menu</span>
          </div>
          <div class="header-left">
            <span class="material-icons-outlined">search</span>
          </div>
        </header>
    
        <main class="main-container">
          <div class="main-title">
            <p class="font-weight-bold">DASHBOARD</p>
          </div>

          <div class="main-cards">
            <div className="graph" >
                <TrendGraph/>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Result;
