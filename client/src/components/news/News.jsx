import './news.css'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import newsURL from "../../baseurl/newsurl"

const News = () => {
    const [news,setNews]=useState([]);

    useEffect(()=>{
        const fetchData =async()=>{
        try{
            const response = await fetch(`https://newsapi.org/v2/everything?q=business&sortBy=popularity&apiKey=dd4dcc554dd94d61820961820e342242`)
            const data = await response.json();
            const articles = data.articles;
            setNews(articles);
            console.log(articles)
        }catch(err){
            console.log(err)
        }
    };
        fetchData();    
  },[]);

    let navigate = useNavigate();

    return (
        <div className='allnews'>
            <div className='newscontainer'>
                {news.map((res,i)=>{
                    return(
                        <div className='newsitem' key={i}  onClick={()=>navigate(`/`)} id="newspointer">
                            <span className='news-title'>{res.source.name}</span>
                            <span className='news-title'>
                                <img src={res.urlToImage} alt="" />
                            </span>
                            <span className='news-title'>{res.title}</span>
                        </div>
                    )
                })}
            </div>
        </div>
  )
}

export default News;