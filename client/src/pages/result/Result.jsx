import React, {useContext, useEffect, useState} from 'react';
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
import History from '../../components/history/History';

const Result = () => {
  const navigate = useNavigate();

  const {setAuth,user_id}=useContext(ProjectsContext);

  const [searched,setSearched]=useState(false);
  const [loaded,setLoaded]=useState(false);
  const [company,setCompany]=useState("");
  const [time,setTime]=useState('1-m');
  const [value,setValue]=useState([]);
  const [trend,setTrends]=useState();
  const [status,setStatus]=useState(true);
  const [trendStatus,settrendStatus]=useState(true);
  const [trendMsg,settrendMsg]=useState("");
  const [history,setHistory]=useState(false);

  const labels=[];
  const senti_data=[];
  let f1=0;
  let f2=0;
  let f3=0;

  let current_day = new Date();
  let color;
  let score_array=[];
  let count=0;
  let last_phase= []
  let mid_phase= [];
  let first_phase= [];
  let sum1=0,sum2=0,sum3=0;
  let score=0;
  let weight=1;
  let result=0;
  
  let sentimentCount = {
    positive: 0,
    negative: 0,
    neutral: 0
  };

  let data;

  let line_data;
  
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
          color: 'yellow',
          font: 
          {
            family:'Poppins',
            size:8
          }
        },
        grid: {
          color: 'yellow'
        }
      },
      y: 
      {
        type: 'category',
        labels: ['Positive', 'Neutral', 'Negative'],
        ticks: 
        {
          color: '#24E921 ',
          font: 
          {
            family:'Poppins',
            size:11
          }
        },
        grid: {
          color: '#24E921'
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

      const token = localStorage.getItem('token');

      const insert = await baseurl.post('/searchhistory/add',{user_id,query:company})

      const response = await baseurl.get(`/search_key/${company}?time=${time}&id=${user_id}`,
      {
        headers:{
            'authorization' : `Bearer ${token}`
        }
      });

      if(response.data.success===true)
        setValue(response.data.data);

      setStatus(response.data.success);;
      
      setSearched(false);
      setLoaded(true);
    }catch(err){
      console.log(err);
    }
  }
  
  useEffect(()=>{

    try{
      const showtrendresult = async(e) =>{

        const token = localStorage.getItem('token');

        const result = await baseurl.get(`/dashboard?q=${company}&tf=${time}&id=${user_id}`,
        {
          headers:{
              'authorization' : `Bearer ${token}`
          }
        });
  
        if(result.data.success===true)
          setTrends(result.data.data.contents)

        settrendMsg(result.data.message)
  
        settrendStatus(result.data.success)
      }
    
      if(company!=="" || searched===true)
        showtrendresult();
    }catch(err){
      settrendMsg("Ooops...! There was an error while fetching Google Trends Data")
    }
  },[time,searched]);

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
                <span onClick={()=>setHistory(!history)}>History</span>
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

        {history && <History />}

        <div className="grid-container">

          <header className="header">
            <div className="header-left">
              <input type="text" id="company" name="name" placeholder="Search For a Company" value={company} onChange={e=>setCompany(e.target.value)}/>
              
              {(!loaded && searched) ? 
                (<button className='search_button'><FontAwesomeIcon icon={faMagnifyingGlass} beat style={{color: "#ffffff",}} /></button>):
                <button className='search_button' onClick={searchForCompany}><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}}/></button>
              }
              
            </div>
          </header>

          {!loaded && searched && <div class="loader"></div> }

          {!status && loaded && (
          <span style={{marginTop:'100px',transitionDelay:'2s'}}>Oops....! Failed to Fetch. Try Again</span>
          
          )}
          
          {loaded && status && <><main className="main-container">

            <div className="main-container-news">

              <div className="main-title">
                <h3 className="font-weight-bold">Top Results</h3>
                <select value={time} onChange={e=>setTime(e.target.value)}>
                  <option value="1-d">For Last Days</option>
                  <option value="7-d">For Last Week</option>
                  <option value="1-m">For Last Month</option>
                </select>
              </div>

              <div className="result-dash">
                
                {trendStatus ? (trend!=null && <>
                
                  <span>Peak Search At : {trend.peak_search}</span>
                  <span>Peak Interest : {trend.peak_intrest}</span></>)
                : (<span>{trendMsg}</span>) }

                <TrendGraph company={company} time={time}/>
  
                <div className="result-dash-news">
                  {value.map((res,i)=>{ 
                    const dateObject = new Date(res.news_time);

                    const x = parseInt((current_day-dateObject) / (1000 * 60 * 60 * 24))

                    if(time==='1-d' && x>3)
                      return null;
                    else if(time==='7-d' && x>7)
                      return null;
                      
                    labels.push(res.news_time);
                    senti_data.push(res.news_sentiment.sentiment);

                    switch (res.news_sentiment.sentiment) 
                    {
                      case "Positive":
                        sentimentCount.positive++;
                        color="#28B463";
                        score_array.push(1);
                        break;
                      case "Negative":
                        sentimentCount.negative++;
                        color="#C70039";
                        score_array.push(-1);
                        break;
                      default:
                        sentimentCount.neutral++;
                        color="#F7582B";
                        score_array.push(.1);
                        break;
                    }  

                    if(x<=7)
                      first_phase.push(count++)
                    else if(x<=14)
                      mid_phase.push(count++);
                    else
                      last_phase.push(count++)

    
                    data=
                    {
                      labels: ['Negtaive', 'Positive', 'Neutral'],
                      datasets: [{
                          data: [sentimentCount.negative,sentimentCount.positive,sentimentCount.neutral],
                          backgroundColor: [
                              '#C70039',
                              '#28B463',
                              '#F7582B'
                          ],
                          borderWidth:0,
                      }]
                    };
                  
                    line_data =
                    {
                      labels: labels,
                      datasets: [
                      {
                        data: senti_data,
                        borderColor: 'white',
                        tension: 0.1
                      }]
                    };

                    return(
                      <div className="result-dash-news-detail" key={i} onClick={()=>window.open(res.news_url)}>
                        <div className="result-dash-news-detail-content">
                          <img alt="" src="https://yt3.googleusercontent.com/rhqKhfZPaVKRfPi1UvaoekFcSVkipICyGmshnUT9SYMR2JMI8G40YqtaOqz94Ao5rdu_NE0nAw=s900-c-k-c0x00ffffff-no-rj"/>
                          <span>{res.news_title}</span>
                        </div>
                        <button>{res.news_time}</button>
                        <button style={{color:color}}>{res.news_sentiment.sentiment.toUpperCase()}</button>
                      </div>
                    )
                  })}
                </div>
        
                { (labels.length>0) ? <><div className="result-dash-senti">
                  <div className='pie-chart'>
                    <h3>Article Sentiment Result</h3>
                    <Doughnut data={data} options={options} plugins={[ChartDataLabels]} height={30}/>
                  </div> 
                  <div className='trends_stat'> 
                    <span>
                      <text style={{ fontWeight:'600'}}>{count}</text> recent articles have been analyzed from time series <text style={{ fontWeight:'600'}}>{labels[0]}</text>          
                      <br></br>to 
                      <text style={{ fontWeight:'600'}}>{labels[9]}</text>
                    </span>
                    <span>                    
                      <button style={{ backgroundColor: '#28B463' , color:'white',  border:'none' }}>{sentimentCount.positive} sounded Postive</button>--<button style={{ backgroundColor: '#C70039' , color:'white', border:'none'}}>{sentimentCount.negative} sounded Negative</button>--<button style={{ backgroundColor: '#F7582B' , color:'white' , border:'none'}}>{sentimentCount.neutral} sounded Neutral</button>
                    </span>

                    <table>

                      <tr>
                        <th>Time Frame</th>
                        <th>Score</th>
                      </tr>

                    { last_phase.length>0 && (<tr>
                        <th>{labels[last_phase[0]]} - {labels[last_phase[last_phase.length-1]]}</th>
                        {last_phase.forEach(element => {
                          sum1 = sum1 + score_array[element]*weight;
                          weight=weight+.1;
                        })}
                        {(()=>{
                          weight=1;
                          result=(sum1/last_phase.length).toFixed(2);
                          f1=result;
                        })()}
                        <th>{result} {result >= 1 ? <text style={{ color: '#28B463' }}>VG</text>  : (result < 0 ?  <text style={{ color: '#C70039' }}>NG</text> : <text style={{ color: '#F7582B' }}>G</text>) }</th>
                      </tr>)}

                      {mid_phase.length>0 && (<tr>
                        <th>{labels[mid_phase[0]]} - {labels[mid_phase[mid_phase.length-1]]}</th>
                        {mid_phase.forEach(element => {
                          sum2 = sum2 + score_array[element]*weight;
                          weight=weight+.1;
                          f2=result;
                        })}
                        {(()=>{
                          weight=1;
                          result=(sum2/mid_phase.length).toFixed(2);
                        })()}
                        <th>{result} {result >= 1 ? <text style={{ color: '#28B463' }}>VG</text>  : (result < 0 ?  <text style={{ color: '#C70039' }}>NG</text> : <text style={{ color: '#F7582B' }}>G</text>) }</th>
                      </tr>)}

                      {first_phase.length>0 && (<tr>
                        <th>{labels[first_phase[0]]} - {labels[first_phase[first_phase.length-1]]}</th>
                        {first_phase.forEach(element => {
                          sum3 = sum3 + score_array[element]*weight;
                          weight=weight+.1;
                        })}
                        {(()=>{
                          weight=1;
                          result=(sum3/first_phase.length).toFixed(2);
                          f3=result;
                        })()}
                        <th>{result} {result >= 1 ? <text style={{ color: '#28B463' }}>VG</text>  : (result < 0 ?  <text style={{ color: '#C70039' }}>NG</text> : <text style={{ color: '#F7582B' }}>G</text>) }</th>
                      </tr>)}

                    </table>
    
                    <span>
                      {(()=>{
                        score = f1*1 + f2*1.2 + f3*1.5
                      })()}

                      The company sounds overall {score > 1.8 ? <text style={{ color: '#28B463' ,fontWeight:'600'}}>Very Good</text>  : (score >= 0 ? <text style={{ color: '#F7582B',fontWeight:'600' }}>Good</text> : <text style={{ color: '#C70039',fontWeight:'600' }}>Not Good</text>)} performance for the past {time}
                    </span>
                  </div> 
                </div>

                <div className="graph-chart" >
                    <h4>Sentiment Time Series</h4>
                    <Line data={line_data} options={line_options} height={50}/>
                </div></> 
                
                : <span>No results to show for the chosen time.</span>}

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