import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions';


const SignedInLinks = (props) => {
    return (
                <ul>
                <li><NavLink to='/' className="btn btn-floating blue lighten-1"> Home </NavLink></li>   
                <li><a href='/' onClick={props.signOut} className="btn btn-floating blue lighten-1" > Logout </a></li>
                <li><NavLink to='/admin' className="btn btn-floating blue lighten-1"> Add Event </NavLink></li>
                </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
                