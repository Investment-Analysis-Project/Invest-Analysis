import './news.css'
import React, { useEffect,useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import img from './img.jpg'
import { ProjectsContext } from '../../contextapi.js/projectscontext';

const News = () => {
    const [news,setNews]=useState([]);

    const {setNewtitle,setNewsdesc,setNewsurl}=useContext(ProjectsContext);

    useEffect(()=>
    {
        const fetchData =async()=>
        {
            try
            {
                // dd4dcc554dd94d61820961820e342242
                // afcd39b2d9c546cc9293d168cee038e7
                const response = await fetch(`https://newsapi.org/v2/everything?domains=cnbc.com,engadget.com&excludeDomains=engadget.com&language=en&sortBy=popularit&apiKey=afcd39b2d9c546cc9293d168cee038e7`)
                const data = await response.json();
                const articles = data.articles;
                setNews(articles);
            }
            catch(err)
            {
                console.log(err)
            }
        };
        fetchData();    
    },[]);

    let navigate = useNavigate();

    return (
        <div className='allnews'>
            <div className='newscontainer'>
                {news?.map((res,i)=>{
                    return(
                        <div className='newsitem' key={i}  onClick={()=>{setNewtitle(res.title);setNewsdesc(res.description);setNewsurl(res.url);navigate(`/analysis`)}} id="newspointer">
                            <span className='news-title'>{res.title}</span>
                            <img src={res.urlToImage || img} alt="" />
                            <div className='news-source'>
                                <span>{res.source.name}</span>
                                <span>{res.publishedAt}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
  )
}

export default News;