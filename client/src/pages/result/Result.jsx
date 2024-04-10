import React, {useContext, useState,} from 'react';
import './result.css';
import baseurl from '../../baseurl/baseurl';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import { useNavigate} from 'react-router-dom';
import TrendGraph from '../../components/trendGraph/TrendGraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faUser,faClockRotateLeft,faGear,faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import {Chart as ChartJS} from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Line,Doughnut} from "react-chartjs-2";
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

  let line_data =
  {
    labels: ['20-10-2023 12.30','20-11-2023 12.30','20-13-2023 12.30','20-14-2023 12.30','20-15-2023 12.30','20-16-2023 12.30','20-16-2023 12.30','20-17-2023 12.30','20-17-2023 12.30'],
    datasets: [
    {
      label:'Plot',
      data: ['Positive', 'Negative', 'Neutral','Positive', 'Positive', 'Neutral','Positive','Positive','Positive','Positive','Positive','Positive','Positive'],
      borderColor: 'white',
      tension: 0.1
    }]
  };
  
  const options = 
  {
    plugins: 
    {
      legend: 
      {
        labels: 
        {
            color: 'black',
            font:
            {
              family:'Poppins',
              size:15
            },
            boxWidth: 10,
        }
      },
      datalabels: 
      {
        color: 'white',
        font:
        {
          family:'Poppins',
          weight:'bold'
        }
      }
    }
  };
  
  const line_options = 
  {
    scales: 
    {
      x: 
      {
        ticks: 
        {
          color: 'white',
          font: 
          {
            family:'Poppins',
            size:10
          }
        }
      },
      y: 
      {
        type: 'category',
        labels: ['Positive', 'Neutral', 'Negative'],
        ticks: 
        {
          color: '#07CE43',
          font: 
          {
            family:'Poppins'
          }
        }
      }
    },
    plugins: 
    {
        legend:
        {
          display: false
        }
    }
  }

  const searchForCompany = async(e)=>
  {
    e.preventDefault();
    
    try
    {
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
                      labels: ['Negtaive', 'Positive', 'Neutral'],
                      datasets: [{
                          data: [sentimentCount.negative,sentimentCount.positive,sentimentCount.neutral],
                          backgroundColor: [
                              '#C70039',
                              '#28B463',
                              '#F7582B'
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
                        <button>{res.news_time}</button>
                        <button>{res.news_sentiment.sentiment.toUpperCase()}</button>
                      </div>
                    )
                  })}
                </div>

                <div className="graph-chart" >
                    <h4>Sentiment Time Series</h4>
                    <Line data={line_data} options={line_options} height={50}/>
                </div> 
        
                <div className="result-dash-senti">
                  <div className='pie-chart'>
                    <h3>Article Sentiment</h3>
                    <Doughnut data={data} options={options} plugins={[ChartDataLabels]} />
                  </div>  
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
