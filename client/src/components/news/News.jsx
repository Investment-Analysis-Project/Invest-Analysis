import './news.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const News = () => {
    const [news,setnews]=useState([{news_id:'12',news_title:'hello'},{news_id:'12',news_title:'hello'},{news_id:'12',news_title:'hello'},{news_id:'12',news_title:'hello'},{news_id:'12',news_title:'hello'},{news_id:'12',news_title:'hello'}]);

    let navigate = useNavigate();

    return (
        <div className='allnews'>
            <div className='newscontainer'>
                {news.map((res,i)=>{
                    return(
                        <div className='newsitem' key={res.news_id}  onClick={()=>navigate(`/`)} id="newspointer">
                            <span className='news-title'>{res.news_title}</span>
                        </div>
                    )
                })}
            </div>
        </div>
  )
}

export default News;