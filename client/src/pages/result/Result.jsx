import React, {useContext, useState,} from 'react';
import './result.css';
import baseurl from '../../baseurl/baseurl';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import { useNavigate} from 'react-router-dom';
import TrendGraph from '../../components/trendGraph/TrendGraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faUser,faClockRotateLeft,faGear,faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import {Chart as ChartJS} from 'chart.js/auto';
import {Bar,Line,Doughnut} from "react-chartjs-2";
import Loading from '../../components/loading/Loading';

const Result = () => {
  const navigate = useNavigate();

  const {setAuth}=useContext(ProjectsContext);
  const [loaded,setLoaded]=useState(false);
  const [searched,setSearched]=useState(false);
  const [company,setCompany]=useState("Apple");
  const [value,setValue]=useState([]);

  let sentimentCount = {
    positive: 0,
    negative: 0,
    neutral: 0
  };
  let data;
  const options = {
    plugins: {
        legend: {
            labels: {
                color: 'white',
                font:{
                  family:'Poppins',
                  size:15
                },
                boxWidth: 10 
            }
        }
    }
  };

  const searchForCompany = async(e)=>{
    e.preventDefault();
    
    try{
      setSearched(true);
      setLoaded(false);
      const response = await baseurl.get(`/search_key/${company}`);
      setValue(response.data);
      setSearched(false);
      setLoaded(true);
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
          </div>

          <ul className="sidebar-list">
            <li className="sidebar-list-item">
                <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}}/>
                <span>Profile</span>
            </li>

            <li className="sidebar-list-item">
                <FontAwesomeIcon icon={faClockRotateLeft} style={{color: "#ffffff",}}/>
                <span >History</span>
            </li>
            
            <li className="sidebar-list-item">
                <FontAwesomeIcon icon={faGear} style={{color: "#ffffff",}}/>
                <span >Settings</span>
            </li>
          
            <li className="sidebar-list-item"> 
                <FontAwesomeIcon icon={faRightFromBracket} style={{color: "#ffffff",}}/>
                <span  onClick={()=>{setAuth(false); localStorage.removeItem('token');navigate('/')}}>Logout</span>
            </li>
          </ul>
        </aside>

        <div className="grid-container">

          <header className="header">
            <div className="header-left">
              <input type="text" id="company" name="name" placeholder="Search For a Company" value={company} onChange={e=>setCompany(e.target.value)}/>
              <button className='search_button' onClick={searchForCompany}><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}}/></button>
            </div>
          </header>

          {!loaded && searched && <Loading/>}
          
          {loaded && <><main className="main-container">

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

                    data={
                      labels: ['Negtaive', 'Posistive', 'Neutral'],
                      datasets: [{
                          data: [sentimentCount.negative,sentimentCount.positive,sentimentCount.neutral],
                          backgroundColor: [
                              'rgb(227, 4, 46)',
                              'rgb(11, 182, 4)',
                              'rgb(227, 221, 4)'
                          ],
                          borderWidth:0,
                          hoverOffset: 4
                      }]
                  };


                    return(
                      <div className="result-dash-news-detail" key={i}>
                        <div className="result-dash-news-detail-content">
                          <img alt="" src="https://yt3.googleusercontent.com/rhqKhfZPaVKRfPi1UvaoekFcSVkipICyGmshnUT9SYMR2JMI8G40YqtaOqz94Ao5rdu_NE0nAw=s900-c-k-c0x00ffffff-no-rj"/>
                          <span>{res.news_title}</span>
                        </div>
                        <button>{res.news_sentiment.sentiment.toUpperCase()}</button>
                      </div>
                    )
                  })}
                </div>
        
                <div className="result-dash-senti">
                    <h3>Article Sentiment</h3>
                    <Doughnut data={data} options={options} />
                    {/* <span>Positve&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;{sentimentCount.positive}</span>
                    <span>Negative : &nbsp;{sentimentCount.negative} </span>
                    <span>Neutral&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;{sentimentCount.neutral}</span> */}
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
          </main></>}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Result;
