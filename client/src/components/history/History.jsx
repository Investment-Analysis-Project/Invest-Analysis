import React, { useContext, useEffect, useState } from 'react'
import baseurl from '../../baseurl/baseurl';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import './history.css'

const History = () => {

    const{user_id}=useContext(ProjectsContext);

    const [status,setStatus]=useState(false);
    const [history,setHistory]=useState([]);
    const [histMsg,sethistMsg]=useState("");

    useEffect(()=>{
        try{
            const getHistroy = async() =>{
                const result = await baseurl.post('/searchhistory/get',{
                    user_id
                });

                if(result.data.success===true)
                {
                    setHistory(result.data.data.recent_search);
                    
                    if((result.data.data.recent_search).length===0)
                        sethistMsg("No History");
                }
                    
                else
                    sethistMsg(result.data.message);

                setStatus(result.data.success);
            }

            if(user_id)
                getHistroy();
        }catch(err){
            sethistMsg("There was an error while fetching the history !");
        }
    },[])

    return (
        (status && history.length>0 ? <>
        <div className='history_container'>
        
        {history.map((res,i)=>{
            return(
                <span>{res}</span>
            )
        })}
        
        </div>
        </> : <div className='history_container'>{histMsg}</div>)
    )
}

export default History