import React, { useContext, useState} from 'react';
import './navbar.css';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHouseUser, faRightFromBracket, faSignIn, faUserCircle, faUserSecret } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {

    const {home}=props;

    const navigate = useNavigate();
    const [profilevisible,setprofilevisible]=useState(false);

    const profileview=()=>{
        setprofilevisible(!profilevisible);
    }

    const {auth,setAuth}=useContext(ProjectsContext);

    return(
        <div className='navbar'>
            {(!home || auth) && (<div className='items'>
                <button className='navbut' onClick={()=>{navigate('/')}}><FontAwesomeIcon icon={faHouseUser} /> Home</button>  
            </div>)}

            {auth ? (<div className='items'>
                <button className='navbut' onClick={profileview}><FontAwesomeIcon icon={faUserCircle} size='xl'/></button>

                {profilevisible && <div className='logindropdown'>
                    <ul className='liststyle'>
                        <li>
                           <p className='profilelistitem' onClick={()=>{navigate('/')}}><FontAwesomeIcon icon={faUserSecret}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Profile</p>  
                        </li>
                        <li>
                            <p className='profilelistitem' onClick={()=>{setAuth(false); localStorage.removeItem('token');navigate('/')}}><FontAwesomeIcon icon={faRightFromBracket}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Logout</p>
                        </li>
                    </ul>
                </div>}
            </div>) :
            (<div className='items'>
                <button className='navbut' onClick={()=>{navigate('/login')}}><FontAwesomeIcon icon={faSignIn}/> Login</button>
            </div>)}
        </div>
    );
}

export default Navbar;