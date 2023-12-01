import React from 'react';
import { useContext } from 'react';
import './analysis.css';
import Navbar from '../../components/navbar/Navbar';
import { ProjectsContext } from '../../contextapi.js/projectscontext';

const Analysis = () => {
    const {news_title,news_desc,news_url}=useContext(ProjectsContext);
    return(
        <>
            <Navbar/>
            <h1>{news_title}</h1>
            <h1>{news_desc}</h1>
            <h1>{news_url}</h1>
        </>
    )
}

export default Analysis;