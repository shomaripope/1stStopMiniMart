import React, { Component } from 'react';
import EventList from './EventList';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase'
class Events extends Component {
    state= {
        events:[]
    }
    deleteEvent=(eventId)=>{

        firebase.database().ref('events').child(eventId).remove()
    }
    // updateEvent = (title) =>{
    //     update = {
    //         title: title
    //     }
    //     firebase.database().ref('events').child(eventId).update(update) 
    // }

    getEvents = () =>{
        var that = this
        firebase.database().ref('events').once('value').then((data)=>{
            var newData = data.val()
           
            function json2array(res) {
                var result = [];
                var keys = Object.keys(res);
                keys.forEach(function(key) {
                  result.push(res[key]);
                });
                return result;
               }
               that.setState({events: json2array(newData)})
               console.log(json2array(newData))
        })
    }
componentDidMount(){
    this.getEvents()
}
    render() {
        console.log(this.props)
        const  events = this.state.events
        return (
            <div >
                <div className="container">
                    <h4>Check out our upcoming events!</h4>
                    <h5>Fill out our form to request an event to book! </h5>
                    <NavLink to='/requestevent' className="btn waves-effect waves-light blue lighten-1"> Book An Event </NavLink>
                </div>
                <br />
                <NavLink to='/pastevents' className="btn waves-effect waves-light blue lighten-1"> Past Event Pics </NavLink>
                <br />
                <div>
                <br />
                <EventList events={events} />
                </div>
            </div>    
        );
    }
}

export default Events;

// const mapStateToProps = (state) => {
//     console.log(state);
//     return {
//         events: state.firestore.ordered.events
//     }
// }

// export default compose(
//     connect(mapStateToProps),
//     firestoreConnect([
//         { collection: 'events' }
//     ])
// )(Events);