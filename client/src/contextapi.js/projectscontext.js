import React from 'react';
import { createContext,useState } from 'react';

export const ProjectsContext = createContext();

export const ProjectsContextProvider = (props)=>{

    const [auth,setAuth]=useState(false);
    const [user_id,setUser_id]=useState("");
    const [news_title,setNewtitle]=useState("");
    const [news_desc,setNewsdesc]=useState("");
    const [news_url,setNewsurl]=useState("");
     
    const contextValues={auth,setAuth,user_id,setUser_id,news_title,setNewtitle,
        news_desc,setNewsdesc,news_url,setNewsurl};

    return(
        <ProjectsContext.Provider value={contextValues}>
            {props.children}
        </ProjectsContext.Provider>
    );
};