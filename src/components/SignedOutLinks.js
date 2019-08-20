import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
                <ul>
                <li><NavLink to='/' className="btn btn-floating blue lighten-1"> Home </NavLink></li>    
                <li><NavLink to='/signin' className="btn btn-floating blue lighten-1">Admin Login </NavLink></li>
                <li><NavLink to='/signup' className="btn btn-floating blue lighten-1"> Sign Up </NavLink></li>
                <li><NavLink to='/requestevent' className="btn btn-floating blue lighten-1"> Request An Event </NavLink></li>
                </ul>
    )
}

export default SignedInLinks;