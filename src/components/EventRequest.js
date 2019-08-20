import React, { Component } from 'react';

class EventRequest extends Component {
    state = {
        title: '',
        author: '',
        content: '',
        date: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Request New Event</h5>
                    <div className="input-field">
                            <label htmlFor="title">Event Title</label>
                            <input type="text" id="title" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="author">Event Host</label>
                            <input type="text" id="author" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="content">Event Details</label>
                            <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="date">Event Date</label>
                            <input type="text" id="date" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <button className="btn blue lighten-1 z-depth-0">Submit Event Request</button>
                        </div>
                </form>
                
            </div>
        );
    }
}

export default EventRequest;