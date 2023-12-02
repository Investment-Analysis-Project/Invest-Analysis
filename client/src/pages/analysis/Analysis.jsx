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
                        <span className='analysistitle'>Anduril unveils Roadrunner, 'a fighter jet weapon that lands like a Falcon 9' | TechCrunch</span>
                        <span className='analysisdesc'>Leading defense tech startup Anduril has developed a new product designed to take on the proliferation of low-cost, high-powered aerial threats.</span>
                        <button className='analysisurl' onClick={()=>window.open(`https://techcrunch.com/2023/11/30/anduril-unveils-roadrunner-a-fighter-jet-weapon-that-lands-like-a-falcon-9/`)}>Read Article</button>      
                        <span className='analysisdesc'>Sentiment Score <button className='analysisscore'>9.8</button></span>
                        <span className='analysisdesc'>Entities Found &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className='analysisscore'>Company</button></span>
                    </div>
                </div>
            </div>    
        </>
    )
}

export default Analysis;