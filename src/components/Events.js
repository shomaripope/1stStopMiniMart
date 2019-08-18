import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventList from './EventList';

class Events extends Component {
    render() {
        console.log(this.props)
        const { events } = this.props;
        return (
                <EventList events={events} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.event.events
    }
}

export default connect(mapStateToProps)(Events);