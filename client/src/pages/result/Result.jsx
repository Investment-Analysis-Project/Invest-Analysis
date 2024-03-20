import React from 'react';
import './result.css';
import { useNavigate} from 'react-router-dom';
import { useEffect,useRef} from 'react';
import img from '../../components/news/img.jpg'
import TrendGraph from '../../components/trendGraph/TrendGraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars,faMagnifyingGlass,faUser,faClockRotateLeft,faGear,faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
/* eslint-disable no-undef */


const Result = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <div className="result_page">
      <div className="result_container">
        <aside id="sidebar">
          <div class="sidebar-title">
            <div class="sidebar-brand">
              <span onClick={()=>{navigate('/')}}>InvestAnalysis.</span>  
            </div>
            <span class="material-icons-outlined" onclick="closeSidebar()">close</span>
          </div>

          <ul class="sidebar-list">
            <li class="sidebar-list-item">
                <span class="material-icons-outlined"><FontAwesomeIcon icon={faUser} /> &nbsp; Profile</span>
            </li>

            <li class="sidebar-list-item">
                <span class="material-icons-outlined"><FontAwesomeIcon icon={faClockRotateLeft} /> &nbsp;History</span>
            </li>
            
            <li class="sidebar-list-item">
                <span class="material-icons-outlined"><FontAwesomeIcon icon={faGear} />&nbsp; Settings</span>
            </li>
          
            <li class="sidebar-list-item"> 
                <span class="material-icons-outlined"><FontAwesomeIcon icon={faRightFromBracket} />&nbsp; Logout</span>
            </li>
          </ul>
        </aside>

        <div class="grid-container">

          <header class="header">
            <div class="menu-icon" onclick="openSidebar()">
              <span class="material-icons-outlined"><FontAwesomeIcon icon={faBars} /></span>
            </div>
            <div class="header-left">
              <input type="text" id="company" name="name" placeholder="Search For a Company"/>
              <button className='search_button'><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}}/></button>
            </div>
          </header>
          
          <main class="main-container">
            <div class="main-title">
              <h3 class="font-weight-bold">Top Results</h3>
            </div>

            <button className='senti_button'>Overall sentiment of latest news : Negative</button>

            <div className="newscontainer">
              <div className='newsitem' id="newspointer">
                  <span className='news-title'>Anker power banks and wireless chargers are up to 43 percent off for the Amazon Spring Sale</span>
                  <img src="https://img.freepik.com/free-vector/banking-business-facebook-template_23-2150971682.jpg?t=st=1710874848~exp=1710878448~hmac=440ae8aa2ab1ba105fa057be926c1c73e10a2abc25a20c6f23b6878d0461f870&w=900" alt="" />
                  <div className='news-source'>
                    <span>CNBC</span>
                    <span>26-11-2024 10:30 PM</span>
                  </div>
              </div>

              <div className='newsitem' id="newspointer">
                  <span className='news-title'>Anker power banks and wireless chargers are up to 43 percent off for the Amazon Spring Sale</span>
                  <img src="https://img.freepik.com/free-vector/banking-business-facebook-template_23-2150971682.jpg?t=st=1710874848~exp=1710878448~hmac=440ae8aa2ab1ba105fa057be926c1c73e10a2abc25a20c6f23b6878d0461f870&w=900" alt="" />
                  <div className='news-source'>
                    <span>CNBC</span>
                    <span>26-11-2024 10:30 PM</span>
                  </div>
              </div>

              <div className='newsitem' id="newspointer">
                  <span className='news-title'>Anker power banks and wireless chargers are up to 43 percent off for the Amazon Spring Sale</span>
                  <img src="https://img.freepik.com/free-vector/banking-business-facebook-template_23-2150971682.jpg?t=st=1710874848~exp=1710878448~hmac=440ae8aa2ab1ba105fa057be926c1c73e10a2abc25a20c6f23b6878d0461f870&w=900" alt="" />
                  <div className='news-source'>
                    <span>CNBC</span>
                    <span>26-11-2024 10:30 PM</span>
                  </div>
              </div>

              <div className='newsitem' id="newspointer">
                  <span className='news-title'>Anker power banks and wireless chargers are up to 43 percent off for the Amazon Spring Sale</span>
                  <img src="https://img.freepik.com/free-vector/banking-business-facebook-template_23-2150971682.jpg?t=st=1710874848~exp=1710878448~hmac=440ae8aa2ab1ba105fa057be926c1c73e10a2abc25a20c6f23b6878d0461f870&w=900" alt="" />
                  <div className='news-source'>
                    <span>CNBC</span>
                    <span>26-11-2024 10:30 PM</span>
                  </div>
              </div>

              <div className='newsitem' id="newspointer">
                  <span className='news-title'>Anker power banks and wireless chargers are up to 43 percent off for the Amazon Spring Sale</span>
                  <img src="https://img.freepik.com/free-vector/banking-business-facebook-template_23-2150971682.jpg?t=st=1710874848~exp=1710878448~hmac=440ae8aa2ab1ba105fa057be926c1c73e10a2abc25a20c6f23b6878d0461f870&w=900" alt="" />
                  <div className='news-source'>
                    <span>CNBC</span>
                    <span>26-11-2024 10:30 PM</span>
                  </div>
              </div>

              <div className='newsitem' id="newspointer">
                  <span className='news-title'>Anker power banks and wireless chargers are up to 43 percent off for the Amazon Spring Sale</span>
                  <img src="https://img.freepik.com/free-vector/banking-business-facebook-template_23-2150971682.jpg?t=st=1710874848~exp=1710878448~hmac=440ae8aa2ab1ba105fa057be926c1c73e10a2abc25a20c6f23b6878d0461f870&w=900" alt="" />
                  <div className='news-source'>
                    <span>CNBC</span>
                    <span>26-11-2024 10:30 PM</span>
                  </div>
              </div>
            </div>

            <div class="main-title">
              <h3 class="font-weight-bold">Google Trends Search</h3>
            </div>
            <div class="main-cards">
              <div className="graph" >
                  <TrendGraph/>
              </div>

              <div className="graph" >
                  <TrendGraph/>
              </div>

              <div className="graph" >
                  <TrendGraph/>
              </div>

              <div className="graph" >
                  <TrendGraph/>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Result;
