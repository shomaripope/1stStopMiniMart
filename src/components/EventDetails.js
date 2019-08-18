import React from 'react';

const EventDetails = ({event}) => {
        return (
            <div className="card">
                <div className="card-content grey-text text-darken-">
                <span className="card-title">{event.title}</span>
                <p>Event Details: {event.content}</p>
                <p>Hosted By: {event.author}</p>
                <p>Date: Today </p>
            </div>
        </div>
        );
    }

export default EventDetails;