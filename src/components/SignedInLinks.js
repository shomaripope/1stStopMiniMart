import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions';


const SignedInLinks = (props) => {
    return (
                <ul >
                <li><NavLink to='/' className="btn waves-effect waves-light blue lighten-1" > Home </NavLink></li>   
                <li><a href='/' onClick={props.signOut} className="btn waves-effect waves-light blue lighten-1" > Logout </a></li>
                <li><NavLink to='/events' className="btn waves-effect waves-light blue lighten-1"> Events </NavLink></li>
                <li><NavLink to='/admin' className="btn waves-effect waves-light blue lighten-1"> Add Event </NavLink></li>
                </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
                