import React from 'react';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions';


const SignedInLinks = (props) => {
    return (
                <ul >
                <li><a href='/' className="btn waves-effect waves-light blue lighten-1" > Home </a></li>   
                <li><a href='/' onClick={props.signOut} className="btn waves-effect waves-light blue lighten-1" > Logout </a></li>
                <li><a href='/events' className="btn waves-effect waves-light blue lighten-1"> Events </a></li>
                <li><a href='/admin' className="btn waves-effect waves-light blue lighten-1"> Add Event </a></li>
                </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
                