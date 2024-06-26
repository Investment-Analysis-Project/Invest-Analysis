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
    const [login,setLogin]=useState(true);
    const [signup,setSignup]=useState(false);
  
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

            const value = response.data;

            setMessage(value.message);

            if(!value.success)
                return;

            const token = value.data.token;
            const decodedToken =jwt(token);

            localStorage.setItem('token', token);

            setAuth(value.data.auth);
            setUser_id(decodedToken.user_id);
              
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

            const value = await response.data;

            new_setMessage(value.message);

            if(!value.success)
                return;

            setUserName(new_user_name);
            setPassword(new_user_password);
            setMessage("");
            setLogin(true);
            setSignup(false);

        }catch(err){
            console.log(err);
        }   
    }

    return(
        <div className='logincomponent'>
            {!auth ? (<>
            <Navbar login_page={true}/>
            <div className='loginpage'>

                <div className="logincontainer">

                <div className='blankcolumn'>  
                    <h1>Welcome !</h1>   
                    <h4>Unleash the power of news to make informed and profitable investment decisions in real time</h4>
                </div>   

                <div className='login'>

                    <div className='loginoptions'>
                        <button onClick={()=>{setLogin(true);setSignup(false)}}>Login</button>
                        <span>OR</span>
                        <button onClick={()=>{setLogin(false);setSignup(true)}}>Sign Up</button>
                    </div>

                    {login && (<><div className='loginform'>
                        <h1>User Login</h1>

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
                    </div></>)}

                    

                    {signup&&(<><div className='loginform'>
                        <h1>Sign Up</h1>

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

                        <button className='logbut' onClick={createSubmit}>Sign up</button>
                    </div></>)}
                </div>
                </div> 
            </div></>) : <Home/>}
        </div>
    )
}

export default Login;