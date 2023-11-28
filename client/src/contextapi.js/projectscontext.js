import React from 'react';
import { createContext,useState } from 'react';

export const ProjectsContext = createContext();

export const ProjectsContextProvider = (props)=>{

    const [auth,setAuth]=useState(false);
    const [user_id,setUser_id]=useState("");
    
    const contextValues={auth,setAuth,user_id,setUser_id};

    return(
        <ProjectsContext.Provider value={contextValues}>
            {props.children}
        </ProjectsContext.Provider>
    );
};