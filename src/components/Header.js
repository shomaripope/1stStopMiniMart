import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import NavBar from './NavBar';

class Header extends Component {
    render() {
        return (
           
                <div className="brand-logo center"><Link to='/'><li><img src={Logo} alt="logo" id="logo" /></li></Link>
                <div><NavBar /></div>
                
                <div className="container">
                <h5>Welcome To 1st Stop Mini-Mart</h5>
                <h6>Mini Mart/Cafe/Lounge/Event Center</h6>
                <h6>Located at 444 Hightland Ave NE, Atlanta Ga 30312</h6>
                </div>
           </div>
        );
    }
}

export default Header;