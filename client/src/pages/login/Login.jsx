import React, { useContext, useState } from 'react';
import './login.css';
import baseurl from '../../baseurl/baseurl';
import { useNavigate } from 'react-router-dom';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import Navbar from '../../components/navbar/Navbar';
import Home from '../home/Home';
import jwt from 'jwt-decode';

const Login = () => {
    const [user_name,setUserName]=useState("");
    const [user_password,setPassword]=useState("");
    const [message,setMessage]=useState("");
    const [new_user_name,new_setUserName]=useState("");
    const [new_user_password,new_setPassword]=useState("");
    const [new_email,new_setEmail]=useState("");
    const [new_message,new_setMessage]=useState("");
  
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

            console.log(value.auth);

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

    const createSubmit = async(e) =>{
        e.preventDefault();

        if(new_user_name===""||new_user_password===""||new_email===""){
            new_setMessage("Credentials can't be empty!");
            return;
        }

        try{
            const response = await baseurl.post("/auth/create",{
                user_name:new_user_name,
                user_password:new_user_password,
                email:new_email
             });

            const value=response.data;

            console.log(value.stat);

            if(!value.stat){
                new_setMessage(value.message);
                return;
            }

            new_setMessage("Account Created");

        }catch(err){
            console.log(err);
        }   
    }

    return(
        <>
            {!auth ? (<>
            <Navbar/>
            <div className='loginpage'>

                <div className='blankcolumn'>  
                    <h1>Welcome !</h1>   
                    <h4>Unleash the power of news to make informed and profitable investment decisions in real time</h4>
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

                    <h2>OR</h2>

                    <h1>Create Account</h1>

                    <div className='loginform'>
                        <div className='logintext'>
                            <span>Username</span>
                            <input type="text" className='loginput' value={new_user_name} onChange={(e)=>new_setUserName(e.target.value)}/>
                        </div>

                        <div className='logintext'>
                            <span>Password</span>
                            <input type="password" className='loginput' value={new_user_password} onChange={(e)=>new_setPassword(e.target.value)}/>
                        </div>

                        <div className='logintext'>
                            <span>Email</span>
                            <input type="email" className='loginput' value={new_email} onChange={(e)=>new_setEmail(e.target.value)}/>
                        </div>

                        <span>{new_message}</span>

                        <button className='logbut' onClick={createSubmit}>Create</button>
                    </div>

                </div> 
            </div></>) : <Home/>}
        </>
    )
}

export default Login;