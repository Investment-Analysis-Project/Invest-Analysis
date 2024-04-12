import { useState } from 'react';
import baseurl from '../../baseurl/baseurl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../navbar/Navbar';

const Search=()=>{

    const [keyword,setKeyword]=useState("");
    const [news,setNews]=useState([]);

    const search_key_fun = async(e)=>{
        e.preventDefault();
        
        const response = await baseurl.get(`/search_key/${keyword}`);
        setNews([]);
        setNews(response.data);
    }

    return (
        <>
            <Navbar/>
            <div className='container'>
                <div className='search_key'>
                    <input className='search_key_form' placeholder="Enter name of the company" onChange={e=>setKeyword(e.target.value)}/>
                    <button className='search_button' onClick={(e)=>{setNews([]);search_key_fun(e)}}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                </div>

                <div className='news_data'>
                    <table>
                        <thead>
                            <tr>
                                <td>URL</td>
                                <td>Sentiment</td>
                            </tr>
                        </thead>
                        <tbody>
                        {news.map((res,i)=>{
                            return(
                                <tr>
                                    <td>{res.news_title}</td>
                                    <td>{res.news_sentiment.score}</td>
                                </tr>
                        )})}
                        </tbody>
                    </table>
                </div>
            </div>
        </>    
    )
}

export default Search;