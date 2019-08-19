import React from 'react';
import EventDetails from './EventDetails';
import{ Link } from 'react-router-dom';

const EventList = ({events}) => {
    return (
        <div>
            { events && events.map(event => {
                return (
                    <Link to={'/event/' + event.id} >
                    <EventDetails event={event} key={event.id} />
                    </Link>
                )
            })}
        </div>
    )
}

export default EventList;