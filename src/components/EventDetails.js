import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class EventDetails extends Component {
    render() {
        console.log(this.props)
        const { event } = this.props;

        return (
                <div className="card">
                <div className="card-content grey-text text-darken-">
                    <span className="card-title">Event Title: </span>
                    <p>Event Details: gjygjgj}</p>
                    <p>Hosted By: dslslsn</p>
                    <p>Date:  </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        events: state.firestore.ordered.events
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'events' }
    ])
)(EventDetails);