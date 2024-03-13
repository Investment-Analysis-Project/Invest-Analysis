import React from 'react';
import './profile.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar home={true}/>
      <div className='homecontainer'>              
        </div>

        <div class="grid-container">

      <header class="header">
        <div class="menu-icon" onclick="openSidebar()">
          <span class="material-icons-outlined">menu</span>
        </div>
        <div class="header-left">
          <span class="material-icons-outlined">search</span>
        </div>
      </header>
     
      <aside id="sidebar">
        <div class="sidebar-title">
          <div class="sidebar-brand">
            <span class="material-icons-outlined">Logged in</span> User Name
          </div>
          <span class="material-icons-outlined" onclick="closeSidebar()">close</span>
        </div>

        <ul class="sidebar-list">
        <li class="sidebar-list-item">
            <a href="#" target="_blank">
              <span class="material-icons-outlined">Home</span>
            </a>
          </li>
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
              <span class="material-icons-outlined">Notes</span>
            </a>
          </li>
          <li class="sidebar-list-item">
            <a href="#" target="_blank">
              <span class="material-icons-outlined">Trending</span>
            </a>
          </li>
          <li class="sidebar-list-item">
            <a href="#" target="_blank">
              <span class="material-icons-outlined">Settings</span>
            </a>
          </li>
          <li class="sidebar-list-item">
            <a href="#" target="_blank">
              <span class="material-icons-outlined">Change Password</span>
            </a>
          </li>
          <li class="sidebar-list-item">
            <a href="#" target="_blank">
              <span class="material-icons-outlined">Logout</span>
            </a>
          </li>
        </ul>
      </aside>
     
      <main class="main-container">
        <div class="main-title">
          <p class="font-weight-bold">DASHBOARD</p>
        </div>

        <div class="main-cards">

  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">Previous Queries</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Job Id">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
    </li>
    <li class="table-row">
    <div class="col col-1" data-label="Job Id">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
   </li>
    <li class="table-row">
    <div class="col col-1" data-label="Job Id">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
   </li>
    <li class="table-row">
    <div class="col col-1" data-label="Job Id">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
   </li>
  </ul>
       

        </div>
      </main>
      

    </div>

    </div>
  );
};

export default Profile;
