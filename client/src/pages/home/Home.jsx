import React from 'react'
import './home.css';
import Navbar from '../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import News from '../../components/news/News';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar home={true}/>
      <div className='homecontainer'>
          <div className='homeintro'>
            <h1>Welcome to InvestAnalysis</h1>   
            <p>
              Unleash the power of news to make informed and profitable investment decisions in real time
            </p>
          </div>             
        </div>
        <News/>
    </div>
  )
}

export default Home;