import './news.css'
import React, { useEffect, useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import img from './img.jpg'
import { ProjectsContext } from '../../contextapi.js/projectscontext';

const News = () => {
    const [news,setNews]=useState([{
        "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
        },
        "author": "Aria Alamalhodaei",
        "title": "Anduril unveils Roadrunner, 'a fighter jet weapon that lands like a Falcon 9' | TechCrunch",
        "description": "Leading defense tech startup Anduril has developed a new product designed to take on the proliferation of low-cost, high-powered aerial threats. The",
        "url": "https://techcrunch.com/2023/11/30/anduril-unveils-roadrunner-a-fighter-jet-weapon-that-lands-like-a-falcon-9/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/11/2023_RR_Landing.jpg?resize=1200,675",
        "publishedAt": "2023-12-02T00:20:10Z",
        "content": "Leading defense tech startup Anduril has developed a new product designed to take on the proliferation of low-cost, high-powered aerial threats.\r\nThe product is called Roadrunner, a modular, twin-jet… [+2596 chars]"
        }]);

    const {news_title,setNewtitle,news_desc,setNewsdesc,news_url,setNewsurl}=useContext(ProjectsContext);

    useEffect(()=>{
        const fetchData =async()=>{
        try{
            //const response = await fetch(`https://newsapi.org/v2/everything?q=finance&domains=investing.com,cnbc.com,bloomberg.com&language=en&sortBy=relevancy&apiKey=afcd39b2d9c546cc9293d168cee038e7`)
            //const data = await response.json();
            //const articles = data.articles;
            //setNews(articles);
            //console.log(articles)
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