import React, {useContext, useState,useEffect} from 'react';
import './result.css';
import baseurl from '../../baseurl/baseurl';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import { useNavigate} from 'react-router-dom';
import TrendGraph from '../../components/trendGraph/TrendGraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars,faMagnifyingGlass,faUserCheck,faClockRotateLeft,faGear,faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Result = () => {
  const navigate = useNavigate();

  const {auth,setAuth}=useContext(ProjectsContext);

  const [company,setCompany]=useState("");
  const [value,setValue]=useState([]);
  let sentimentCount = {
    positive: 0,
    negative: 0,
    neutral: 0
  };

  const searchForCompany = async(e)=>{
    e.preventDefault();
    
    try{
      const response = await baseurl.get(`/search_key/${company}`);
      setValue(response.data);
      console.log(response.data)
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div>
      <div className="result_page">
      <div className="result_container">
        <aside id="sidebar">
          <div className="sidebar-title">
            <div className="sidebar-brand">
              <span onClick={()=>{navigate('/')}}>InvestAnalysis.</span>  
            </div>
            <span className="material-icons-outlined">close</span>
          </div>

          <ul className="sidebar-list">
            <li className="sidebar-list-item">
                <FontAwesomeIcon icon={faUserCheck} style={{color: "#ffffff",}}/>
                <span className="material-icons-outlined">Profile</span>
            </li>

            <li className="sidebar-list-item">
                <FontAwesomeIcon icon={faClockRotateLeft} style={{color: "#ffffff",}}/>
                <span className="material-icons-outlined">History</span>
            </li>
            
            <li className="sidebar-list-item">
                <FontAwesomeIcon icon={faGear} style={{color: "#ffffff",}}/>
                <span className="material-icons-outlined">Settings</span>
            </li>
          
            <li className="sidebar-list-item"> 
                <FontAwesomeIcon icon={faRightFromBracket} style={{color: "#ffffff",}}/>
                <span className="material-icons-outlined" onClick={()=>{setAuth(false); localStorage.removeItem('token');navigate('/')}}>Logout</span>
            </li>
          </ul>
        </aside>

        <div className="grid-container">

          <header className="header">
            <div className="menu-icon">
              <span className="material-icons-outlined"><FontAwesomeIcon icon={faBars} /></span>
            </div>
            <div className="header-left">
              <input type="text" id="company" name="name" placeholder="Search For a Company" value={company} onChange={e=>setCompany(e.target.value)}/>
              <button className='search_button' onClick={searchForCompany}><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}}/></button>
            </div>
          </header>
          
          <main className="main-container">

            <div className="main-container-news">

              <div className="main-title">
                <h3 className="font-weight-bold">Top Results</h3>
              </div>

              <div className="result-dash">
                <div className="result-dash-news">
                  {value.map((res,i)=>{ 

                    switch (res.news_sentiment.sentiment) 
                    {
                      case "Positive":
                        sentimentCount.positive++;
                        break;
                      case "Negative":
                        sentimentCount.negative++;
                        break;
                      default:
                        sentimentCount.neutral++;
                        break;
                    }  

                    return(
                      <div className="result-dash-news-detail" key={i}>
                        <div className="result-dash-news-detail-content">
                          <img src="https://yt3.googleusercontent.com/rhqKhfZPaVKRfPi1UvaoekFcSVkipICyGmshnUT9SYMR2JMI8G40YqtaOqz94Ao5rdu_NE0nAw=s900-c-k-c0x00ffffff-no-rj"/>
                          <span>{res.news_title}</span>
                        </div>
                        <button>{res.news_sentiment.sentiment.toUpperCase()}</button>
                      </div>
                    )
                  })}
                </div>
        
                <div className="result-dash-senti">
                    <h3>Article Sentiment</h3>
                    <span>Positve&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;{sentimentCount.positive}</span>
                    <span>Negative : &nbsp;{sentimentCount.negative} </span>
                    <span>Neutral&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;{sentimentCount.neutral}</span>
                </div>
              </div>

            </div>

            <div className="main-container-graph">
              <div className="main-title">
                <h3 className="font-weight-bold">Google Trends Search</h3>
              </div>
              <div className="main-cards">
                <div className="graph" >
                    <TrendGraph company={company}/>
                </div>
                <div className="graph" >
                    <TrendGraph company={company}/>
                </div>
                <div className="graph" >
                    <TrendGraph company={company}/>
                </div>
                <div className="graph" >
                    <TrendGraph company={company}/>
                </div>
                <div className="graph" >
                    <TrendGraph company={company}/>
                </div>
                <div className="graph" >
                    <TrendGraph company={company}/>
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
