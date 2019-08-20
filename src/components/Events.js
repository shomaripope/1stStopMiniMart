import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventList from './EventList';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Events extends Component {
    render() {
        console.log(this.props)
        const { events } = this.props;

        return (
                <div>
                    
                <EventList events={events} />
                
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
)(Events);