import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/1stStopLogo.png'

const Footer = () => {
    return (
        <nav className="nav red darken-3">
            <div id="footer">
                <Link to='/' className="brand-logo">
                    <img src={Logo} alt="logo" /> 
                </Link>
                    <div className="center">
                        <h1> 1st Stop Mini-Mart </h1>
                        <h3>Located at 444 Hightland Ave NE, Atlanta Ga 30312</h3>
                        <h3>Mini Mart/Cafe/Lounge/Event Center</h3>
                    </div>
            </div>
        </nav>
    )
}

export default Footer;