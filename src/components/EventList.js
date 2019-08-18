import React from 'react';
import EventDetails from './EventDetails';

const EventList = ({events}) => {
    return (
        <div>
            { events && events.map(event => {
                return (
                    <EventDetails event={event} key={event.id} />
                )
            })}
        </div>
    )
}

export default EventList;