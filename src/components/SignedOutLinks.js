import React, { Component } from 'react';
import Logo from '../images/facebook2.png';
import Logo2 from '../images/instagram.png';
import Logo3 from '../images/twitter.png';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

class SignedOutLinks extends Component {

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    
    render() {
        return (
        <div>   
            
    <div className="nav-wrapper">
      <a href="/" className="brand-logo"> </a>
      <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href='/' > Home </a></li>    
        <li><a href='/signup' > Mailing List </a></li>
        <li><a href='/events' > Events </a></li>
        <li><a href='/requestevent' > Book An Event </a></li>
      </ul>
    </div>
  

  <ul className="sidenav" id="mobile-demo">
    <li><a href='/' > Home </a></li>    
    <li><a href='/signup' > Mailing List </a></li>
    <li><a href='/events' > Events </a></li>
    <li><a href='/requestevent' > Book An Event </a></li>
    <br/>
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
        </div>
        );
    }
}

export default SignedOutLinks;
