import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
                <ul >
                <li><NavLink to='/' className="btn waves-effect waves-light blue lighten-1"> Home </NavLink></li>    
                {/* <li><NavLink to='/signin' className="btn waves-effect waves-light blue lighten-1">Admin Login </NavLink></li> */}
                <li><NavLink to='/signup' className="btn waves-effect waves-light blue lighten-1"> Mailing List </NavLink></li>
                <li><NavLink to='/events' className="btn waves-effect waves-light blue lighten-1"> Upcoming Events </NavLink></li>
                <li><NavLink to='/requestevent' className="btn waves-effect waves-light blue lighten-1"> Book An Event </NavLink></li>
                </ul>
    )
}

export default SignedInLinks;