import React from 'react';
import { NavLink } from 'react-router-dom';
// import Logo from '../images/1stStopLogo.png'

const Footer = () => {
    return (

<footer className="page-footer" id="footer">
          <div className="container">
            <div className="row">
              <div>
                <div id="footer2">
                   <p>
                        <br />
                        <br />
                        <br />
                        <br />
                    </p>
                </div> 
                    <p>1st Stop Mini-Mart <br />
                    444 Hightland Ave NE, Atlanta Ga 30312 <br />
                    678.515.8928
                    </p>
                </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container blue-text">
                © 2014 Copyright 1st Stop MiniMart  <br/>
                Powered By: Shomri N'Kosi Pope
            <div className="right" href="#!"><NavLink to='/signin' >Admin Login </NavLink></div>
            </div>
          </div>
        </footer>
    )
}

export default Footer;