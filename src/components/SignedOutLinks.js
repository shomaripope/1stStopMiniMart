import React from 'react';
// import { Link } from 'react-router-dom';
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
                <li><a href='/' > Home </a></li>    
                <li><a href='/signup' > Mailing List </a></li>
                <li><a href='/events' > Events </a></li>
                <li><a href='/requestevent' > Book An Event </a></li>
            </ul>
    </div>
  </nav>

<ul className="sidenav" id="mobile-demo">
<ul>
    <li><a href='/' > Home </a></li>    
    <li><a href='/signup' > Mailing List </a></li>
    <li><a href='/events' > Events </a></li>
    <li><a href='/requestevent' > Book An Event </a></li>
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