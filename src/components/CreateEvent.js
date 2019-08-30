import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { createEvent } from '../store/actions/eventActions';
import firebase from 'firebase'

class CreateEvent extends Component {
    state = {
        title: '',
        name: '',
        number: '',
        email: '',
        content: '',
        date: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const newEventReference = firebase.database().ref('events').push()
        newEventReference.set(this.state)
        //this.setState(firebase.database().ref('events').set(this.state))
       let date = new Date().toISOString()
       e.target.reset();
    }
    updateEvent = (eventId) =>{
       var update = this.state
        firebase.database().ref('events').child(eventId).update(update) 
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Event</h5>
                    <div className="input-field">
                            <label htmlFor="title">Event Title</label>
                            <input type="text" id="title" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="name">Event Host</label>
                            <input type="text" id="name" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="number">Host Contact number</label>
                            <input type="text" id="number" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="email">Host Contact email</label>
                            <input type="email" id="email" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="content">Event Details</label>
                            <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="date">Event Date</label>
                            <input type="date" id="date" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <button className="btn waves-effect waves-light blue lighten-1 z-depth-0">Create Event</button>
                        </div>
                </form>
                
            </div>
        );
    }
}

export default CreateEvent

// const mapDispatchToProps = (dispatch) => {
//     return {
//         createEvent: (event) => dispatch(createEvent(event))
//     }
// }

// export default connect(null, mapDispatchToProps)(CreateEvent);