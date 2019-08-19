import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const EventDetails = (props) => {
    const id = props.match.params.id;
        return (
            <div className="card">
                <div className="card-content grey-text text-darken-">
                    <span className="card-title">{id}</span>
                    <p>Event Details: {}</p>
                    <p>Hosted By: {}</p>
                    <p>Date:  </p>
                </div>
            </div>
        );
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const events = state.firestore.data.events;
    const event = events ? events[id] : null
    return {
        event: event
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'events' }
    ])
)(EventDetails);