import React from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../images/1stStopLogo.png'

const Footer = () => {
    return (
        <nav className="nav red darken-3">
            <div id="footer">
                {/* <Link to='/' className="brand-logo">
                    <img src={Logo} alt="logo" /> 
                </Link> */}
                    <div className="footer center">
                        <h4> 1st Stop Mini-Mart </h4>
                        <h4>Located at 444 Hightland Ave NE, Atlanta Ga 30312</h4>
                        <h4>Mini Mart/Cafe/Lounge/Event Center</h4>
                    </div>
            </div>
        </nav>
    )
}

export default Footer;