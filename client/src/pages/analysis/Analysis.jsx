import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './analysis.css';
import Navbar from '../../components/navbar/Navbar';
import { ProjectsContext } from '../../contextapi.js/projectscontext';

const Analysis = () => {
    const navigate = useNavigate();

    const [sentiment,setSentiment]=useState(9.12);
    const [entity,setentity]=useState(["Company,Location"]);

    const {news_title,news_desc,news_url}=useContext(ProjectsContext);

    return(
        <>
            <Navbar/>
            <div className='analysispage'>
                <div className='analysiscontainer'>
                    <div className='analysiscontent'>
                        <span className='analysistitle'>{news_title}</span>
                        <span className='analysisdesc'>{news_desc}</span>
                        <button className='analysisurl' onClick={()=>window.open(news_url)}>Read Article</button>      
                        <span className='analysisdesc'>Sentiment Score <button className='analysisscore'>9.8</button></span>
                        <span className='analysisdesc'>Entities Found &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className='analysisscore'>Company</button></span>
                    </div>
                </div>
            </div>    
        </>
    )
}

export default Analysis;