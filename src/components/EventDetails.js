import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { firestoreConnect } from 'react-redux-firebase';
// import { compose } from 'redux';

class EventDetails extends Component {
    render() {
        console.log(this.props)
        const { newevent } = this.props;

        return (
            <div className="container">
                <div className="card">
                    <div className="card-content grey-text text-darken-">
                        <span className="card-title">Event Title: {newevent.title} </span>
                        <p>Hosted By: {newevent.name} </p>
                        <p>Host Contact Email: {newevent.email} </p>
                        <p>Host Contact Number: {newevent.number} </p>
                        <p>Event Details: {newevent.content} </p>
                        <p>Date: {newevent.date} </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventDetails;

// const mapStateToProps = (state) => {
//     console.log(state);
//     return {
//         event: state.firestore.ordered.event
//     }
// }

// export default compose(
//     connect(mapStateToProps),
//     firestoreConnect([
//         { collection: 'events' }
//     ])
// )(EventDetails);