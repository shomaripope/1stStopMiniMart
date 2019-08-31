import React from 'react';
import EventDetails from './EventDetails';
// import{ Link } from 'react-router-dom';

const EventList = ({events}) => {


    return (
        <div>
            { events && events.map(event => {
                return (
                    <div key={event.id}>
                    {/* <Link to={'/event/' + event.id} > */}
                    <EventDetails newevent={event} />
                    {/* </Link> */}
                    </div>
                )
            })}
        </div>
    )
}

export default EventList;


