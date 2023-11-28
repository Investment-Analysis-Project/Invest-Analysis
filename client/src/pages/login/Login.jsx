import React, { useContext, useState } from 'react';
import './login.css';
import baseurl from '../../baseurl/baseurl';
import { useNavigate } from 'react-router-dom';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import Home from '../home/Home';
import jwt from 'jwt-decode';

const Login = () => {
    const [user_name,setUserName]=useState("");
    const [user_password,setPassword]=useState("");
    const [message,setMessage]=useState("");
  
    const {auth,setAuth,setUser_id}=useContext(ProjectsContext);

    const navigate=useNavigate();

    const loginSubmit = async(e) =>{
        e.preventDefault();

        if(user_name===""||user_password===""){
            setMessage("Missing Credentials !");
            return;
        }

        try{
            const response = await baseurl.post("/auth/login",{
                user_name,
                user_password
             });

            const value=response.data;

            if(!value.auth){
                setMessage(value.message);
                return;
            }

            const token = value.token;
            const decodedToken = jwt(token);

            localStorage.setItem('token', token);

            setAuth(value.auth);
            setUser_id(decodedToken.user_id);
            console.log(decodedToken.user_id);
            console.log(value.auth);
              
            navigate('/');

        }catch(err){
            console.log(err);
        }   
    }

    return(
        <>
            {!auth ? (<>
            <div className='loginpage'>

                <div className='blankcolumn'>  
                    <h1>Welcome !</h1>   
                    <h4>Your gateway to all the projects of CS department. Across <br/>different domains, 
                    guided by faculties, completed and ongoing, all packed in here !</h4>
                </div>   

                <div className='login'>
                    <h1>User Login</h1>

                    <div className='loginform'>
                        <div className='logintext'>
                            <span>Username</span>
                            <input type="text" className='loginput' value={user_name} onChange={(e)=>setUserName(e.target.value)}/>
                        </div>

                        <div className='logintext'>
                            <span>Password</span>
                            <input type="password" className='loginput' value={user_password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>

                        <span>{message}</span>

                        <button className='logbut' onClick={loginSubmit}>Login</button>
                    </div>

                </div> 
            </div></>) : <Home/>}
        </>
    )
}

export default Login;