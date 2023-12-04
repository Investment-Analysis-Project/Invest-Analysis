import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './analysis.css';
import Navbar from '../../components/navbar/Navbar';
import { ProjectsContext } from '../../contextapi.js/projectscontext';

const Analysis = () => {
    const navigate = useNavigate();

    const [sentiscore,setSentiscore]=useState(0);
    const [sentilabel,setSentilabel]=useState("");
    const [entity,setentity]=useState([]);

    const {news_title,news_desc,news_url}=useContext(ProjectsContext);

    useEffect(()=>
    {
        const query1 = async(data)=>
        {
            try{
                const response = await fetch(
                "https://api-inference.huggingface.co/models/ProsusAI/finbert",
                {
                    //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
                    headers: { Authorization: "Bearer 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" },
                    method: "POST",
                    body: JSON.stringify(data),
                }
            );
                const result = await response.json();
                const senti =result[0][0];
                setSentilabel(senti.label);
                setSentiscore(senti.score);
                console.log(result[0][0]);
                return result;
            }catch(err){
                console.log(err)
            }
        }

        const query2 = async(data)=> 
        {
            //"https://api-inference.huggingface.co/models/dslim/bert-base-NER"
            try{
                const response = await fetch(
                "https://api-inference.huggingface.co/models/mdarhri00/named-entity-recognition",
                {
                    //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
                    headers: { Authorization: "Bearer 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" },
                    method: "POST",
                    body: JSON.stringify(data),
                }
            );
                const result = await response.json();
                setentity(result);
                console.log(entity);
                return result;
            }catch(err){
                console.log(err)
            }
        }
          
        query1({"inputs":news_title}).then((response)=>{});
        query2({"inputs":news_title}).then((response)=>{});
    },[])

    return(
        <>
            <Navbar/>
            <div className='analysispage'>
                <div className='analysiscontainer'>
                    <div className='analysiscontent'>
                        <span className='analysistitle'>{news_title}</span>
                        <span className='analysisdesc'>{news_desc}</span>
                        <button className='analysisurl' onClick={()=>window.open(news_url)}>Read Article</button>      
                        <span className='analysisdesc'>
                            <h4>Sentiment Score</h4> 
                            <button className='analysisscore'>{sentiscore} ({sentilabel} impact)</button>
                        </span>
                        <span className='analysisdesc'>
                            <h4>Entities Found</h4>
                            {Array.isArray(entity) && entity.map((res,i)=>{
                                return(
                                    <div key={i}>
                                        <button className='analysisscore'>
                                            {(res.entity_group==="Brand_vehicule" || res.entity_group==="Model_vehicule") ?("Organization_Name") :res.entity_group} : {res.word}
                                        </button>
                                    </div>
                                )
                            })}
                        </span>
                    </div>
                </div>
            </div>    
        </>
    )
}

export default Analysis;