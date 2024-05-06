import React from 'react'
import Result from '../../pages/result/Result';
import Login from '../../pages/login/Login';

const Protectedroute = () => {

    const x = localStorage.getItem('token');

    return (
        (x!==null? <Result/> : <Login/>)
    )
}

export default Protectedroute;