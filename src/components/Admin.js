import React, { Component } from 'react';
import CreateEvent from './CreateEvent';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Admin extends Component {
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div>
                <CreateEvent />
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth

    }
}
export default connect(mapStateToProps)(Admin);