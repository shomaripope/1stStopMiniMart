import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/facebook2.png';
import Logo2 from '../images/instagram.png';
import Logo3 from '../images/twitter.png';

const SignedInLinks = () => {
    return (
        <div>   
            <nav className="nav-extended">
                    <div>
                        <ul id="nav-mobile">
                            <li><NavLink to='/' className="btn waves-effect waves-light blue lighten-1"> Home </NavLink></li>    
                            {/* <li><NavLink to='/signin' className="btn waves-effect waves-light blue lighten-1">Admin Login </NavLink></li> */}
                            <li><NavLink to='/signup' className="btn waves-effect waves-light blue lighten-1"> Mailing List </NavLink></li>
                            <li><NavLink to='/events' className="btn waves-effect waves-light blue lighten-1"> Events </NavLink></li>
                            <li><NavLink to='/requestevent' className="btn waves-effect waves-light blue lighten-1"> Book An Event </NavLink></li>
                        </ul>
                    </div>
            
                <ul>
                    <li className="right">
                    <a href="https://www.facebook.com/1ststopminimart/" ><img src={Logo} alt="logo" id="socialIcon" /></a>
                    </li>
                    <li className="right">
                    <a href="https://www.instagram.com/1st_stopminimart/" ><img src={Logo2} alt="logo" id="socialIcon" /></a>
                    </li>
                    <li className="right">
                    <a href="https://twitter.com/1stStopMM/" ><img src={Logo3} alt="logo" id="socialIcon" /></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default SignedInLinks;
