import React, { useContext, useState} from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faHome, faPerson, faPersonChalkboard, faPersonCircleCheck, faRightFromBracket, faSignIn, faUserCircle, faUserSecret } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {

    const {home}=props;

    const navigate = useNavigate();
    const [profilevisible,setprofilevisible]=useState(false);

    const profileview=()=>{
        setprofilevisible(!profilevisible);
    }

    const {auth,setAuth,isAdmin,setisAdmin,user_id,setCurr_aof}=useContext(ProjectsContext);

    return(
        <div className='navbar'>
            {(!home || auth) && (<div className='items'>
                <button className='navbut' onClick={()=>{navigate('/')}}><FontAwesomeIcon icon={faHome}/> Home</button>
                
                <button className='navbut' onClick={()=>{navigate('/projects')}}><FontAwesomeIcon icon={faFileAlt}/> Projects</button>
                
                <button className='navbut' onClick={()=>{navigate('/guides')}}><FontAwesomeIcon icon={faPersonChalkboard}/> Guides</button>
                
            </div>)}

            {auth ? (<div className='admin'>
                <button className='navbut' onClick={profileview}><FontAwesomeIcon icon={faUserCircle} size='xl'/></button>

                {profilevisible && <div className='logindropdown'>
                    <ul className='liststyle'>
                        <li>
                            {isAdmin && (<p className='profilelistitem' onClick={()=>{navigate('/adminpanel')}}><FontAwesomeIcon icon={faUserSecret}/> &nbsp;&nbsp;Admin Panel</p>)}
                            {!isAdmin && (<p className='profilelistitem' onClick={()=>{navigate(`/guide/${user_id}`)}}><FontAwesomeIcon icon={faPersonCircleCheck}/> &nbsp;&nbsp;&nbsp;&nbsp;Profile</p>)}      
                        </li>
                        <li>
                            <p className='profilelistitem' onClick={()=>{setAuth(false); setisAdmin(false); localStorage.removeItem('token');navigate('/')}}><FontAwesomeIcon icon={faRightFromBracket}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Logout</p>
                        </li>
                    </ul>
                </div>}
            </div>) :
            (<div className='admin'>
                <button className='navbut' onClick={()=>{navigate('/login')}}><FontAwesomeIcon icon={faSignIn}/> Login</button>
            </div>)}
        </div>
    );
}

export default Navbar;