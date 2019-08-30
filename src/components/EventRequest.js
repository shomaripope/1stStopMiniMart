import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestEvent } from '../store/actions/requestActions';
import { Link } from 'react-router-dom';

class RequestEvent extends Component {
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
        // console.log(this.state);
        this.props.requestEvent(this.state)
        e.target.reset();
    }
    render() {
        return (
            <div className="container">
            <h4>
                From small, intimate, gatherings to large private/public events, we have the space for you! Give us a call for more info @ 678.515.8928!
            </h4>
           
           <Link to='/eventagreement' className="btn waves-effect waves-light blue lighten-1">Rental Agreement</Link> 

                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Book Event Request</h5>
                    <div className="input-field">
                            <label htmlFor="title">Event Title:</label>
                            <input type="text" id="title" onChange={this.handleChange} required />
                        </div>
                        <div className="input-field">
                            <label htmlFor="name">Event Host Name:</label>
                            <input type="text" id="name" onChange={this.handleChange} required />
                        </div>
                        <div className="input-field">
                            <label htmlFor="number">Host Phone Number:</label>
                            <input type="text" id="number" onChange={this.handleChange} required />
                        </div>
                        <div className="input-field">
                            <label htmlFor="email">Host Phone email:</label>
                            <input type="email" id="email" onChange={this.handleChange} required />
                        </div>
                        <div className="input-field">
                            <label htmlFor="content">Event Details:</label>
                            <textarea id="content" className="materialize-textarea" onChange={this.handleChange} required />
                        </div>
                        <div className="input-field">
                            {/* <label htmlFor="date">Event Date:</label> */}
                            <input type="date" id="date" onChange={this.handleChange} required />
                        </div>
                        <div className="input-field">
                            <button className="btn waves-effect waves-light blue lighten-1 z-depth-0">Request Event</button>
                        </div>
                </form>
                
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestEvent: (post) => dispatch(requestEvent(post))
    }
}

export default connect(null, mapDispatchToProps)(RequestEvent);