import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/1stStopLogo.png';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


const NavBar = (props) => {
    const { auth } = props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    return (
        <nav className="nav red darken-3">
                <Link to='/'> <li><img src={Logo} alt="logo" /></li> </Link>
                <div>
                 { links }
                
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(NavBar);
