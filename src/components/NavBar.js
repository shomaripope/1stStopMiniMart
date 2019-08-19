import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/1stStopLogo.png'

const NavBar = () => {
    return (
        <nav className="nav red darken-3">
            <div>
                <img src={Logo} alt="logo" /> <Link to='/'></Link>
                <ul>
                <li><Link to='/admin'> Admin Login</Link></li>
                <li><Link to='/signup'> Sign Up</Link></li>
                <li><Link to='/'> Home</Link></li>
                </ul>
                <h4 cl="center">Welcome To 1st Stop Mini-Mart</h4>
            </div>
        </nav>
    )
}

export default NavBar;
