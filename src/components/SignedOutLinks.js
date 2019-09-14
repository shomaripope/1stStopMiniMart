import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/facebook2.png';
import Logo2 from '../images/instagram.png';
import Logo3 from '../images/twitter.png';

const SignedOutLinks = () => {
    return (
        <div>   
            <nav id="navbar">
    <div className="nav-wrapper">
        <a href="/home" data-target="mobile-demo" className="sidenav-trigger"><b className="material-icons"> ||| </b></a>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to='/' > Home </NavLink></li>    
                <li><NavLink to='/signup' > Mailing List </NavLink></li>
                <li><NavLink to='/events' > Events </NavLink></li>
                <li><NavLink to='/requestevent' > Book An Event </NavLink></li>
            </ul>
    </div>
  </nav>

<ul className="sidenav" id="mobile-demo">
<ul>
    <li><NavLink to='/' > Home </NavLink></li>    
    <li><NavLink to='/signup' > Mailing List </NavLink></li>
    <li><NavLink to='/events' > Events </NavLink></li>
    <li><NavLink to='/requestevent' > Book An Event </NavLink></li>
</ul>
    <br/>
    <ul>
    <li className="center">
    <a href="https://www.facebook.com/1ststopminimart/" ><img src={Logo} alt="logo" id="socialIcon" /></a>
    </li><br/>
    <li className="center">
    <a href="https://www.instagram.com/1st_stopminimart/" ><img src={Logo2} alt="logo" id="socialIcon" /></a>
    </li><br/>
    <li className="center">
    <a href="https://twitter.com/1stStopMM/" ><img src={Logo3} alt="logo" id="socialIcon" /></a>
    </li><br/>
    </ul>
</ul>
        </div>
    )
}


export default SignedOutLinks;