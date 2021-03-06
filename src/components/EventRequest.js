import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestEvent } from '../store/actions/requestActions';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_PATH = 'https://ststopminimart.firebaseio.com';


class RequestEvent extends Component {
    state = {
        title: '',
        name: '',
        number: '',
        email: '',
        content: '',
        date: '',
        mailSent: false,
        error: null
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

        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: this.state
          })
            .then(result => {
              this.setState({
                mailSent: result.data.sent
              })
            })
            .catch(error => this.setState({ error: error.message }));
    }
    render() {
        return (
            <div className="container">
            <h5>
                From small, intimate, gatherings to large private/public events, we have the space for you! <br /> Give us a call for more info @ 678.515.8928
            </h5>
           
           <Link to='/eventagreement' className="btn waves-effect waves-light blue lighten-1">Rental Agreement</Link> 

                <form action="mailto:shomaripope@gmail.com" encType="text/plain" onSubmit={this.handleSubmit} className="white">
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
                            <label htmlFor="email">Host email:</label>
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
                        <div>
                            {this.state.mailSent &&
                                <div>Thank you for contcting us.</div>
                            }
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