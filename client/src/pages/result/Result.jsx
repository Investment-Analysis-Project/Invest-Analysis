import React, {useContext} from 'react';
import './result.css';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import { useNavigate} from 'react-router-dom';
import TrendGraph from '../../components/trendGraph/TrendGraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars,faMagnifyingGlass,faUser,faClockRotateLeft,faGear,faRightFromBracket,faMagic,faKey } from '@fortawesome/free-solid-svg-icons';

const Result = () => {
  const navigate = useNavigate();

  const {auth,setAuth}=useContext(ProjectsContext);
  
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
                <span class="material-icons-outlined" onClick={()=>{setAuth(false); localStorage.removeItem('token');navigate('/')}}><FontAwesomeIcon icon={faRightFromBracket} />&nbsp; Logout</span>
            </li>

            <li class="sidebar-list-item">
                <span class="material-icons-outlined"><FontAwesomeIcon icon={faMagic} />&nbsp; Another</span>
            </li>            

            <li class="sidebar-list-item">
                <span class="material-icons-outlined"><FontAwesomeIcon icon={faKey} />&nbsp; About</span>
            </li>
          </ul>

          <span className="side_foot">All Rights Served</span>
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

            <div className="main-container-news">

              <div class="main-title">
                <h3 class="font-weight-bold">Top Results</h3>
              </div>

              <div className="result-dash">
                <div className="result-dash-news">
                  <div className="result-dash-news-detail">
                  <img src="https://yt3.googleusercontent.com/rhqKhfZPaVKRfPi1UvaoekFcSVkipICyGmshnUT9SYMR2JMI8G40YqtaOqz94Ao5rdu_NE0nAw=s900-c-k-c0x00ffffff-no-rj" alt="" />
                  <span>Zomato’s ‘pure veg food’ scheme is pure casteism. Here’s why many people don’t get that</span>
                    <button>Negative</button>
                  </div>

                  <div className="result-dash-news-detail">
                    <img src="https://yt3.googleusercontent.com/rhqKhfZPaVKRfPi1UvaoekFcSVkipICyGmshnUT9SYMR2JMI8G40YqtaOqz94Ao5rdu_NE0nAw=s900-c-k-c0x00ffffff-no-rj" alt="" />
                    <span>Zomato’s ‘pure veg food’ scheme is pure casteism. Here’s why many people don’t get that</span>
                    <button>Negative</button>
                  </div>

                  <div className="result-dash-news-detail">
                  <img src="https://yt3.googleusercontent.com/rhqKhfZPaVKRfPi1UvaoekFcSVkipICyGmshnUT9SYMR2JMI8G40YqtaOqz94Ao5rdu_NE0nAw=s900-c-k-c0x00ffffff-no-rj" alt="" />
                  <span>Zomato’s ‘pure veg food’ scheme is pure casteism. Here’s why many people don’t get that</span>
                    <button>Negative</button>
                  </div>

                  <div className="result-dash-news-detail">
                  <img src="https://yt3.googleusercontent.com/rhqKhfZPaVKRfPi1UvaoekFcSVkipICyGmshnUT9SYMR2JMI8G40YqtaOqz94Ao5rdu_NE0nAw=s900-c-k-c0x00ffffff-no-rj" alt="" />
                    <span>Zomato’s ‘pure veg food’ scheme is pure casteism. Here’s why many people don’t get that</span>
                    <button>Negative</button>
                  </div>

                  <div className="result-dash-news-detail">
                  <img src="https://yt3.googleusercontent.com/rhqKhfZPaVKRfPi1UvaoekFcSVkipICyGmshnUT9SYMR2JMI8G40YqtaOqz94Ao5rdu_NE0nAw=s900-c-k-c0x00ffffff-no-rj" alt="" />
                    <span>Zomato’s ‘pure veg food’ scheme is pure casteism. Here’s why many people don’t get that</span>
                    <button>Negative</button>
                  </div>

                  <div className="result-dash-news-detail">
                  <img src="https://yt3.googleusercontent.com/rhqKhfZPaVKRfPi1UvaoekFcSVkipICyGmshnUT9SYMR2JMI8G40YqtaOqz94Ao5rdu_NE0nAw=s900-c-k-c0x00ffffff-no-rj" alt="" />
                    <span>Zomato’s ‘pure veg food’ scheme is pure casteism. Here’s why many people don’t get that</span>
                    <button>Negative</button>
                  </div>
                </div>
        
                <div className="result-dash-senti">
                    <h3>Sentiment Analysis</h3>
                    <span className='result-dash-senti-data'>Positive Article : 0</span>
                    <span className='result-dash-senti-data'>Negative Article : 6</span>
                    <span className='result-dash-senti-data'>Neutral Article : 0</span>

                    <br></br>
                    <h3>Entities Found</h3>
                    <span>Google</span>
                    <span>Apple</span>
                    <span>Nvidia</span>
                </div>
              </div>

            </div>

            <div className="main-container-graph">
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
                <div className="graph" >
                    <TrendGraph/>
                </div>
                <div className="graph" >
                    <TrendGraph/>
                </div>
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
