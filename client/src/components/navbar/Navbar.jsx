import React, { useContext, useState} from 'react';
import './navbar.css';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser,faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {

    const {login_page}=props;

    const navigate = useNavigate();
    const [profilevisible,setprofilevisible]=useState(false);

    const profileview=()=>{
        setprofilevisible(!profilevisible);
    }

    const {auth,setAuth,setUser_id}=useContext(ProjectsContext);
    
    return(
        <div className='navbar'>
            <div className="nav_container">
                <div className='logo'>
                    <span onClick={()=>{navigate('/');window.scrollTo(0, 0)}}>InvestAnalysis.</span>  
                </div>

                {auth ? (<div className='items'>
                    <button className='navbut' onClick={()=>{navigate('/result')}}>Search For Company&nbsp;&nbsp; <FontAwesomeIcon icon={faSearch} style={{color: "#ffffff",}} size="sm"/></button>

                    <button className='navbut' onClick={profileview}><FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} size="xl"/></button>

                    {profilevisible && <div className='logindropdown'>
                        <ul className='liststyle'>
                            <li>
                                <p className='profilelistitem' onClick={()=>{setAuth(false);setUser_id(""); localStorage.removeItem('token');navigate('/')}}>Logout</p>
                            </li>
                        </ul>
                    </div>}
                </div>) :
                (!login_page && <div className='items'>
                    <button className='navbut' onClick={()=>{navigate('/login')}}>Login</button>
                </div>)}
            </div>
        </div>
    );
}

export default Navbar;